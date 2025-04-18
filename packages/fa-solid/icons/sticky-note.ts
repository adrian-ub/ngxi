import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidStickyNoteIcon],svg[fa-solid-sticky-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M312 320h136V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h264V344c0-13.2 10.8-24 24-24m129 55l-98 98c-4.5 4.5-10.6 7-17 7h-6V352h128v6.1c0 6.3-2.5 12.4-7 16.9"></svg:path>`,
})
export class FaSolidStickyNoteIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
