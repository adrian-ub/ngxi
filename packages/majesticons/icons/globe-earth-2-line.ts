import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsGlobeEarth2LineIcon],svg[majesticons-globe-earth-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M16 4a2 2 0 0 1-2 2h-.5A1.5 1.5 0 0 0 12 7.5V8a1 1 0 0 1-1 1v0a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a2 2 0 0 1 2 2v0a2 2 0 0 0 2 2h1m-8 4v-2.5c0-.828-.685-1.5-1.513-1.5v0C8.673 17 8 16.34 8 15.526v0c0-.34-.118-.67-.333-.933L3.5 9.5"></svg:path></svg:g>`,
})
export class MajesticonsGlobeEarth2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
