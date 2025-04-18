import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFileTypeT4ttIcon],svg[vscode-icons-file-type-t4tt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e88e5" d="M19.545 6.035H13.27V24H8.3V6.035H2.055V2h17.49ZM27.567 10v12.608h2.4V25.9h-2.4V30h-4.016v-4.1h-8.717v-3.445q1.158-1.3 2.4-2.838t2.4-3.173q1.158-1.632 2.155-3.285A33 33 0 0 0 23.481 10Zm-8.786 12.608h4.77v-6.987q-.488.907-1.06 1.834t-1.2 1.827t-1.269 1.743t-1.241 1.583"></svg:path>`,
})
export class VscodeIconsFileTypeT4ttIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
