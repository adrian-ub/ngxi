import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDividersIcon],svg[tdesign-dividers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v1.232a4.36 4.36 0 0 1 3.375 4.239a4.3 4.3 0 0 1-.678 2.33L18.967 15H22v2h-1.979l2.33 4.418l-1.768.933L17.76 17H13v2h-2v-2H6.24l-2.822 5.351l-1.769-.933L3.98 17H2v-2h3.035l3.27-6.2a4.3 4.3 0 0 1-.68-2.33A4.36 4.36 0 0 1 11 2.233V1zm-3.193 9.238L7.296 15H11v-2h2v2h3.705l-2.511-4.762a4.4 4.4 0 0 1-2.194.585a4.4 4.4 0 0 1-2.193-.585M12 4.118A2.364 2.364 0 0 0 9.625 6.47c0 .6.227 1.148.603 1.566A2.38 2.38 0 0 0 12 8.824c.706 0 1.338-.304 1.773-.787a2.33 2.33 0 0 0 .602-1.566A2.364 2.364 0 0 0 12 4.118"></svg:path>`,
})
export class TdesignDividersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
