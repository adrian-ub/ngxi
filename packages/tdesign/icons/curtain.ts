import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCurtainIcon],svg[tdesign-curtain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 7.465V20h2.914L6.093 9.999L6 10a4 4 0 0 1-2-.535m4.053-.032L8.921 20h6.158l.868-10.567A4 4 0 0 1 15 8.646A4 4 0 0 1 12 10a4 4 0 0 1-3-1.354a4 4 0 0 1-.947.787M8 6h2a2 2 0 1 0 4 0h2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V4H4v2a2 2 0 1 0 4 0m12 3.465a4 4 0 0 1-2.093.534L17.085 20H20z"></svg:path>`,
})
export class TdesignCurtainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
