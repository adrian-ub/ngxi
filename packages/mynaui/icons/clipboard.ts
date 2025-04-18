import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiClipboardIcon],svg[mynaui-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9z"></svg:path><svg:path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></svg:path></svg:g>`,
})
export class MynauiClipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
