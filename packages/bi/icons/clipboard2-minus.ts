import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biClipboard2MinusIcon],svg[bi-clipboard2-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.5 0a.5.5 0 0 1 .5.5a.5.5 0 0 0 .5.5a.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 0 .5-.5a.5.5 0 0 1 .5-.5z"></svg:path><svg:path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"></svg:path><svg:path d="M6 8a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"></svg:path></svg:g>`,
})
export class BiClipboard2MinusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
