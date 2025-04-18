import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsDisplayAltIcon],svg[lineicons-display-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M56 3.8H8c-3.4 0-6.3 2.8-6.3 6.3v30.2c0 3.4 2.8 6.3 6.3 6.3h15.7l-2.5 9.2h-4.5c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h30.5c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3h-4.5l-2.5-9.2H56c3.4 0 6.3-2.8 6.3-6.3V10.1c0-3.5-2.9-6.3-6.3-6.3M38.2 55.7H25.8l2.5-9.2h7.3zm19.6-15.5c0 1-.8 1.8-1.8 1.8H8c-1 0-1.8-.8-1.8-1.8V10.1c0-1 .8-1.8 1.8-1.8h48c1 0 1.8.8 1.8 1.8z"></svg:path>`,
})
export class LineiconsDisplayAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
