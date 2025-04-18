import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimHtml5Icon],svg[uim-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.182 2l1.605 18l7.202 2l7.222-2.002L20.818 2Zm14.143 5.887H8.877l.202 2.261h8.045l-.606 6.778L12 18.178l-.01.003l-4.523-1.255l-.309-3.466h2.216l.158 1.76l2.458.664h.002l2.463-.665l.256-2.863H7.06L6.464 5.68h11.059Z"></svg:path><svg:path fill="currentColor" d="M17.325 7.887H8.877l.202 2.261h8.045l-.606 6.778L12 18.178l-.01.003l-4.523-1.255l-.309-3.466h2.216l.158 1.76l2.458.664h.002l2.463-.665l.256-2.863H7.06L6.464 5.68h11.059Z" opacity=".25"></svg:path>`,
})
export class UimHtml5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
