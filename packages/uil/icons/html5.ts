import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilHtml5Icon],svg[uil-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.183 2l1.604 18l7.202 2l7.222-2.002L20.818 2Zm14.142 5.887H8.877l.202 2.261h8.045l-.606 6.778L12 18.178l-.01.004l-4.522-1.256l-.31-3.466h2.216l.157 1.76l2.46.664h.001l2.463-.665l.256-2.863H7.06L6.464 5.68h11.059Z"></svg:path>`,
})
export class UilHtml5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
