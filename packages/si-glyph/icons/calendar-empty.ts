import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphCalendarEmptyIcon],svg[si-glyph-calendar-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M4 0h.971v1.911H4zm7 0h1v1.906h-1z"></svg:path><svg:path d="M15.976 4.959V2.456c0-.771-.606-1.398-1.354-1.398h-1.59v2.026H9.968V1.058H6.034v2.026H2.938V1.058H1.401c-.748 0-1.354.627-1.354 1.398v2.503zM.046 6.003v8.562c0 .772.606 1.399 1.354 1.399h13.221c.748 0 1.354-.627 1.354-1.399V6.003z"></svg:path></svg:g>`,
})
export class SiGlyphCalendarEmptyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
