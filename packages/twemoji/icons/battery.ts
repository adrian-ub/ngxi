import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiBatteryIcon],svg[twemoji-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#77B255" d="M30 32.7c0 1.657-5.373 3.3-12 3.3S6 34.357 6 32.7S11.373 30 18 30s12 1.043 12 2.7"></svg:path><svg:path fill="#77B255" d="M6 3h24v29.7H6z"></svg:path><svg:ellipse cx="18" cy="3" fill="#5C913B" rx="12" ry="3"></svg:ellipse><svg:path fill="#FFF" d="M21.956 12.788c.091.544-.321 1.066-.922 1.136c-.676.079-1.355.121-2.035.147V16a1 1 0 0 1-2 0v-1.93a26 26 0 0 1-2.035-.147c-.601-.07-1.012-.591-.922-1.136a1.04 1.04 0 0 1 1.152-.851c.6.07 1.202.109 1.804.133V10a1 1 0 0 1 2 0v2.07a25 25 0 0 0 1.804-.133a1.04 1.04 0 0 1 1.154.851m-1.652 17.746a21 21 0 0 1-4.607 0a1.05 1.05 0 0 0-1.153.854c-.091.544.326 1.067.934 1.134c1.676.184 3.368.184 5.044 0c.609-.067 1.026-.59.934-1.134a1.047 1.047 0 0 0-1.152-.854"></svg:path><svg:ellipse cx="18" cy="3" fill="#CCD6DD" rx="10" ry="2"></svg:ellipse><svg:path fill="#99AAB5" d="M14 1v1.5c0 .552 1.791 1 4 1s4-.448 4-1V1z"></svg:path><svg:ellipse cx="18" cy="1" fill="#CCD6DD" rx="4" ry="1"></svg:ellipse>`,
})
export class TwemojiBatteryIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
