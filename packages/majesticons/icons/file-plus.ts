import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsFilePlusIcon],svg[majesticons-file-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 16v3m0 0v3m0-3h3m-3 0h-3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6 2h6v6a3 3 0 0 0 3 3h6v2.341A6 6 0 0 0 13.803 22H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m15 6.828V9h-6a1 1 0 0 1-1-1V2h.172a3 3 0 0 1 2.12.879l3.83 3.828A3 3 0 0 1 21 8.828" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsFilePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
