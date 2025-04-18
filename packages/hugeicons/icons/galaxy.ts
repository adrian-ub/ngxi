import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGalaxyIcon],svg[hugeicons-galaxy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.734 17.734c4.524-4.524 5.624-10.759 2.458-13.926C17.627 1.244 13.05 1.478 9 4.062m-5.192 16.13c2.478 2.478 6.835 2.343 10.78 0M6.266 6.266C2.98 9.552 1.5 13.74 2.15 17"></svg:path><svg:path d="M16.915 7.085c-1.9-1.9-5.641-1.24-8.355 1.475s-3.375 6.455-1.475 8.355s5.641 1.24 8.356-1.474C17.09 13.79 17.98 11.764 18 10"></svg:path><svg:path d="M13.638 10.362c.634.633.414 1.88-.491 2.785s-2.152 1.125-2.785.491c-.634-.633-.414-1.88.491-2.785s2.152-1.125 2.785-.491"></svg:path></svg:g>`,
})
export class HugeiconsGalaxyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
