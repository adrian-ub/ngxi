import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFrogweatherIcon],svg[arcticons-frogweather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.355 26.28c3.967-1.388 9.323-1.388 13.29 0m5.952 3.57c1.289 1.39 1.983 3.076 1.983 4.861c0 14.68-38.385 10.712-27.177-4.86"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.355 25.883c.099 5.555-8.63 5.555-8.53 0c-.1-5.554 8.629-5.554 8.53 0m21.821 0c.099 5.555-8.63 5.555-8.53 0c-.1-5.554 8.629-5.554 8.53 0"></svg:path><svg:circle cx="13.089" cy="25.883" r=".75" fill="currentColor"></svg:circle><svg:circle cx="34.91" cy="25.883" r=".75" fill="currentColor"></svg:circle><svg:circle cx="25.289" cy="33.223" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22.711" cy="33.223" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.015 37.587c9.323 2.778 18.548 2.778 27.871 0M24 22.908v-5.753m-7.34-.595c1.091-5.654 3.57-9.92 7.34-12.696c3.77 2.777 6.249 6.943 7.34 12.696c-4.86-1.389-9.82-1.389-14.68 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.66 16.56c-2.678-.992-5.158-.992-7.538 0C10.907 8.13 16.76 5.154 24 3.864c7.24 1.19 13.093 4.166 14.878 12.696c-2.48-.992-4.86-.992-7.538 0"></svg:path>`,
})
export class ArcticonsFrogweatherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
