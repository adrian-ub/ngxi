import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconExpandAllIcon],svg[codicon-expand-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 9H4v1h5z"></svg:path><svg:path d="M7 12V7H6v5z"></svg:path><svg:path fill-rule="evenodd" d="m5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2zm1 2h4l1 1v4h2V3H6zm4 1H3v7h7z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class CodiconExpandAllIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
