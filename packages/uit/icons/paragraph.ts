import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitParagraphIcon],svg[uit-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 14h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1m8-5h-19a.5.5 0 0 0 0 1h19a.5.5 0 0 0 0-1"></svg:path>`,
})
export class UitParagraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
