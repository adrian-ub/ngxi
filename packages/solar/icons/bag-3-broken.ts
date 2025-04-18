import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBag3BrokenIcon],svg[solar-bag-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20.232 10.526c-.585-3.121-.878-4.682-1.989-5.604C17.133 4 15.545 4 12.37 4h-.721c-3.176 0-4.763 0-5.874.922s-1.404 2.483-1.99 5.604c-.822 4.389-1.234 6.583-.034 8.029S7.182 20 11.648 20h.721c4.465 0 6.698 0 7.898-1.445c.696-.84.85-1.93.695-3.555"></svg:path><svg:path d="M9.17 8a3.001 3.001 0 0 0 5.66 0"></svg:path></svg:g>`,
})
export class SolarBag3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
