import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiPageSelectIcon],svg[oui-page-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5a5 5 0 0 1-.584-1H3V2h7v2a1 1 0 0 0 1 1h2v2.1q.523.106 1 .316V4a1 1 0 0 0-.293-.707l-2-2A1 1 0 0 0 11 1zm13 11a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-1.646-1.354a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l2.146-2.147a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class OuiPageSelectIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
