import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorVideo16Icon],svg[fluent-color-video-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorVideo160)" d="M13.144 11.789L7.34 8l5.804-3.789A1.2 1.2 0 0 1 15 5.216v5.568a1.2 1.2 0 0 1-1.856 1.005"></svg:path><svg:path fill="url(#fluentColorVideo162)" fill-opacity=".75" d="M13.144 11.789L7.34 8l5.804-3.789A1.2 1.2 0 0 1 15 5.216v5.568a1.2 1.2 0 0 1-1.856 1.005"></svg:path><svg:path fill="url(#fluentColorVideo161)" d="M1 5.5C1 4.12 2.099 3 3.455 3h4.09C8.901 3 10 4.12 10 5.5v5c0 1.38-1.099 2.5-2.455 2.5h-4.09C2.099 13 1 11.88 1 10.5z"></svg:path><svg:path fill="url(#fluentColorVideo163)" d="M2 9.5A1.5 1.5 0 0 1 3.5 8h4a1.5 1.5 0 1 1 0 3h-4A1.5 1.5 0 0 1 2 9.5" opacity=".5"></svg:path><svg:path fill="#BABAFF" d="M7.5 10.3a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M3.5 9a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"></svg:path><svg:defs><svg:radialgradient id="fluentColorVideo160" cx="0" cy="0" r="1" gradientTransform="rotate(72.275 3.263 9.07)scale(10.0776 26.0793)" gradientUnits="userSpaceOnUse"><svg:stop offset=".081" stop-color="#F08AF4"></svg:stop><svg:stop offset=".341" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#4E44DB"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorVideo161" cx="0" cy="0" r="1" gradientTransform="matrix(10.3549 10.58341 -22.2325 21.75244 -.636 3.417)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F08AF4"></svg:stop><svg:stop offset=".341" stop-color="#9C6CFE"></svg:stop><svg:stop offset="1" stop-color="#4E44DB"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorVideo162" x1="8.5" x2="14.991" y1="8" y2="7.75" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#312A9A"></svg:stop><svg:stop offset="1" stop-color="#312A9A" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorVideo163" x1="1.841" x2="2.828" y1="8" y2="12.025" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3B148A"></svg:stop><svg:stop offset="1" stop-color="#4B20A0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorVideo16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
