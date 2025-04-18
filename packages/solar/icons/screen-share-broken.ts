import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarScreenShareBrokenIcon],svg[solar-screen-share-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M21 16c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-1c-2.828 0-4.243 0-5.121-.879C8 20.243 8 18.828 8 16V8c0-2.828 0-4.243.879-5.121C9.757 2 11.172 2 14 2h1c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v4M8 19.5c-2.357 0-3.536 0-4.268-.732C3 18.035 3 16.857 3 14.5V14m5-9.5c-2.357 0-3.536 0-4.268.732S3 7.143 3 9.5v.5"></svg:path><svg:path stroke-linejoin="round" d="M14.5 16V8m0 0l2.5 2.5M14.5 8L12 10.5"></svg:path></svg:g>`,
})
export class SolarScreenShareBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
