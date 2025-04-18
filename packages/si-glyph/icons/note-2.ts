import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphNote2Icon],svg[si-glyph-note-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.016 0v1.031h-1.062V0h-.895v1.031h-1.09V0h-.953v1.031H9.954V0h-.922v1.031H7.941V0h-.925v1.031H5.985V0h-.942v1.031H3.959V0H3v16h12.954V0zM5 6.958h9v1H5zm9 5H5v-1h9zM14 10H5V9h9z"></svg:path>`,
})
export class SiGlyphNote2Icon {
  readonly viewBox = input("0 0 17 16")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
