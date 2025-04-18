import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsGlassesOutlineIcon],svg[famicons-glasses-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M224 232a32 32 0 0 1 64 0m160-32h16m-400 0H48m16 0c0 96 16 128 80 128s80-32 80-128c0 0-16-16-80-16s-80 16-80 16m384 0c0 96-16 128-80 128s-80-32-80-128c0 0 16-16 80-16s80 16 80 16"></svg:path>`,
})
export class FamiconsGlassesOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
