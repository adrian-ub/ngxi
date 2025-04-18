import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFatIcon],svg[lets-icons-fat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="9" stroke-width="2"></svg:circle><svg:circle cx="12" cy="12" r="3" stroke-width="2"></svg:circle><svg:path stroke-width="2" d="m15 12l.39-.46c.921-1.082 2.69-.33 2.548 1.084c-.148 1.476 1.752 2.195 2.619.992L21 13m-12-.5l-.016.085c-.322 1.716-2.77 1.74-3.126.031l-.036-.17C5.535 11.07 3.698 10.78 3 12"></svg:path><svg:circle cx="9.5" cy="6.5" r=".5"></svg:circle><svg:circle cx="16.5" cy="8.5" r=".5"></svg:circle><svg:circle cx="13.5" cy="5.5" r=".5"></svg:circle></svg:g>`,
})
export class LetsIconsFatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
