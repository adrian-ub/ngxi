import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiPagesSelectIcon],svg[oui-pages-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1a1 1 0 0 1 1-1h8a1 1 0 0 1 .707.293l2 2A1 1 0 0 1 15 3v5a5 5 0 0 0-1-.584V4h-2a1 1 0 0 1-1-1V1H4v12h3.1q.106.523.316 1H4a1 1 0 0 1-1-1zm5 14H2V2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7a5 5 0 0 1-1-1m8-3a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-1.646-1.354a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l2.146-2.147a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class OuiPagesSelectIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
