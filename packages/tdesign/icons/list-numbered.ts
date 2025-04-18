import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignListNumberedIcon],svg[tdesign-list-numbered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 6h1v2h-4V6h1V4h-1V2h1a2 2 0 0 1 2 2zM7 20v-2h15v2zm0-7v-2h15v2zm0-7V4h15v2zM1.5 9.25h2.47a1.53 1.53 0 0 1 1.082 2.612l-.888.888H5.5v2h-4v-1.336A2 2 0 0 1 2.086 12l.75-.75H1.5zm0 6.5v2h2V18H2v2h1.5v.25h-2v2h2a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2z"></svg:path>`,
})
export class TdesignListNumberedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
