import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionAndroidTimeIcon],svg[ion-android-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-opacity=".9" d="M256 43C137.789 43 43 138.851 43 256s94.789 213 213 213 213-95.851 213-213S373.149 43 256 43zm0 383.4c-93.718 0-170.4-76.683-170.4-170.4S162.282 85.6 256 85.6 426.4 162.282 426.4 256 349.718 426.4 256 426.4z" fill="currentColor"></svg:path><svg:path fill-opacity=".9" d="M266.65 149.5H234.7v127.8l111.825 67.093 15.975-26.625-95.85-56.444z" fill="currentColor"></svg:path>`,
})
export class IonAndroidTimeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
