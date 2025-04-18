import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsSaveIcon],svg[majesticons-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-.293-.707l-4-4A1 1 0 0 0 16 3zm6 11c0-1.6 1.333-2 2-2s2 .4 2 2s-1.333 2-2 2s-2-.4-2-2m4-9H8v3h6z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsSaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
