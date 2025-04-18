import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsCloudyIcon],svg[meteocons-cloudy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsCloudy0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsCloudy0" transform="translate(76.5 140.5)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use>`,
})
export class MeteoconsCloudyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
