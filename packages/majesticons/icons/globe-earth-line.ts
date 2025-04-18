import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsGlobeEarthLineIcon],svg[majesticons-globe-earth-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M8 4v2a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v0a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2v0a2 2 0 0 1 2-2h1m0 8h-3a2 2 0 0 0-2 2v2m-4 0v-2a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v0a2 2 0 0 0-2-2H3"></svg:path></svg:g>`,
})
export class MajesticonsGlobeEarthLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
