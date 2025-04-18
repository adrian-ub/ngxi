import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsRaindropIcon],svg[meteocons-raindrop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsRaindrop0" viewBox="0 0 175 260.9"><svg:path fill="none" stroke="#2885c7" stroke-miterlimit="10" stroke-width="15" d="M87.5 13.4c-48.7 72-80 117-80 160.7s35.8 79.3 80 79.3s80-35.5 80-79.3s-31.3-88.8-80-160.7Z"><svg:animatetransform attributeName="transform" calcMode="spline" dur="6s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1" repeatCount="indefinite" type="scale" values="1 1; 1 .9; 1 1"></svg:animatetransform></svg:path></svg:symbol></svg:defs><svg:use width="175" height="260.9" href="#meteoconsRaindrop0" transform="translate(168.5 122.62)"></svg:use>`,
})
export class MeteoconsRaindropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
