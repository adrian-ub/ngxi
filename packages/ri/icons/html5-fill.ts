import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHtml5FillIcon],svg[ri-html5-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 18.178l4.62-1.256l.623-6.778H9.026L8.822 7.89h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866l-2.52.667l-2.52-.667l-.158-1.844h-2.27l.329 3.544zM3 2h18l-1.623 18L12 22l-7.377-2z"></svg:path>`,
})
export class RiHtml5FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
