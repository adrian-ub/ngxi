import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsSuitcase2LineIcon],svg[majesticons-suitcase-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2m6 0h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7m8-12H9m0 0H7m0 0H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2M7 8v12M17 8v12"></svg:path>`,
})
export class MajesticonsSuitcase2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
