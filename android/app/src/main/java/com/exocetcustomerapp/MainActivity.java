package com.exocetcustomerapp;
import android.os.Bundle; //
import com.reactnativenavigation.NavigationActivity;
import org.devio.rn.splashscreen.SplashScreen; // here


public class MainActivity extends NavigationActivity {
@Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);  // here
        super.onCreate(savedInstanceState);
    }
  
}
