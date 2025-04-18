import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidNoteStickyIcon],svg[fa6-solid-note-sticky-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h224V368c0-26.5 21.5-48 48-48h112V96c0-35.3-28.7-64-64-64zm384 320H336c-8.8 0-16 7.2-16 16v112l32-32l64-64z"></svg:path>`,
})
export class Fa6SolidNoteStickyIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
