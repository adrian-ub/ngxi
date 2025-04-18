import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsLifebuoyLineIcon],svg[majesticons-lifebuoy-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="m18 6l-3.172 3.172M6 18l3.172-3.172M6 6l3.172 3.172M18 18l-3.172-3.172m0-5.656A4 4 0 0 0 12 8a4 4 0 0 0-2.828 1.172m5.656 0A3.98 3.98 0 0 1 16 12a4 4 0 0 1-1.172 2.828M9.172 9.172A4 4 0 0 0 8 12c0 1.105.448 2.105 1.172 2.828m0 0A4 4 0 0 0 12 16a4 4 0 0 0 2.828-1.172"></svg:path></svg:g>`,
})
export class MajesticonsLifebuoyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
