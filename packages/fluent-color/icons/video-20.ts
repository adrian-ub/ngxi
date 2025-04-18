import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorVideo20Icon],svg[fluent-color-video-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorVideo200)" d="m16.04 14.777l-2.038-1.406L9.2 9.8L13.4 7l2.64-1.776A1.25 1.25 0 0 1 18 6.252v7.497a1.25 1.25 0 0 1-1.96 1.028"></svg:path><svg:path fill="url(#fluentColorVideo202)" fill-opacity=".75" d="m16.04 14.777l-2.038-1.406L9.2 9.8L13.4 7l2.64-1.776A1.25 1.25 0 0 1 18 6.252v7.497a1.25 1.25 0 0 1-1.96 1.028"></svg:path><svg:path fill="url(#fluentColorVideo201)" d="M2 7a3 3 0 0 1 3-3h5.001a3 3 0 0 1 3 3v6.001a3 3 0 0 1-3 3h-5a3 3 0 0 1-3.001-3z"></svg:path><svg:path fill="url(#fluentColorVideo203)" d="M3 12a2 2 0 0 1 2-2h5a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2" opacity=".5"></svg:path><svg:path fill="#BABAFF" d="M5 11a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm5 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:defs><svg:radialgradient id="fluentColorVideo200" cx="0" cy="0" r="1" gradientTransform="matrix(2.99999 11.99999 -25.19577 6.29892 14 4)" gradientUnits="userSpaceOnUse"><svg:stop offset=".081" stop-color="#F08AF4"></svg:stop><svg:stop offset=".341" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#4E44DB"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorVideo201" cx="0" cy="0" r="1" gradientTransform="matrix(12.65783 12.70195 -26.68918 26.59646 0 4.5)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F08AF4"></svg:stop><svg:stop offset=".341" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#4E44DB"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorVideo202" x1="11.644" x2="17.991" y1="10.001" y2="9.762" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#312A9A"></svg:stop><svg:stop offset="1" stop-color="#312A9A" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorVideo203" x1="2.796" x2="4.154" y1="10" y2="15.344" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3B148A"></svg:stop><svg:stop offset="1" stop-color="#4B20A0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorVideo20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
