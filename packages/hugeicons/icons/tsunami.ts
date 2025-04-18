import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTsunamiIcon],svg[hugeicons-tsunami-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.066 12.002s0 3 2.934 4m12 5.373a4.92 4.92 0 0 1-4.74 0a2.99 2.99 0 0 0-2.89 0s-.021 0-.021.019c-1.446.81-3.295.81-4.719 0c-.892-.498-2.019-.498-2.89 0m0-.019a4.92 4.92 0 0 1-4.74 0m9-14.373a9.5 9.5 0 0 0 9.5 9.5H22"></svg:path><svg:path d="M6.888 6.927c.372.216 1.092.756 2.292.54c1.44-.444 2.62-.816 3.54-.264c.9.54 1.5 1.02 1.86.78c.178.035.476-.647.414-1.62c-.042-.669-.273-1.475-.786-2.28c-.3-.42-.493-.568-.528-.6c-1.944-1.826-5.081-2.125-7.86 0c-3.12 2.52-3.54 5.7-3.72 7.26c-.3 3 .18 6.42.66 8.28"></svg:path></svg:g>`,
})
export class HugeiconsTsunamiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
