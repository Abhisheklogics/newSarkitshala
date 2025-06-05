import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/databaseConnect';
import { Arduino } from '@/models/arduinomodels';

export async function GET(request) {
  try {
    await dbConnect();

  
    const url = new URL(request.url);
    const exId = url.searchParams.get('exId'); 
    console.log('Requested Experiment ID:', exId);

    
    if (exId) {
      const experiment = await Arduino.findOne(
        { slug: exId }, 
        { title: 1, metaDescription: 1, image1: 1, _id: 0 }  
      );

      if (!experiment) {
        return NextResponse.json({ message: 'Experiment not found' }, { status: 404 });
      }
      return NextResponse.json(experiment, { status: 200 });
    }

   
    

    if (experiments.length === 0) {
      return NextResponse.json({ message: 'No experiments found' }, { status: 404 });
    }

    
    return NextResponse.json(experiments, { status: 200 });

  } catch (error) {
    console.error('Server error:', error.message);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
