import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWaterPoloIcon],svg[hugeicons-water-polo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 21.192c.685 1.05 1.571 1.05 2.273 0c2.257-3.45 4.407 2.481 6 .039c2.43-3.66 4.178 2.688 6-.04c2.376-3.632 3.857 2.384 5.727.391m-4.382-4.572c.695-.604 2.327-2.298 2.745-4.919c.388-1.61.16-5.187-2.45-7.643C16.175 2.71 11.565.185 6.55 3.982c-1.002.808-2.83 3.031-3.039 5.953c-.208 2.922 1.062 4.912 1.71 5.695c.317.344.473.545.805.846c.287.26.406.344.638.532c1.406.052 4.575-.603 6.707-1.964c.473-.222 1.68-.99 2.662-2.354m-11.86.113c1.18.472 4.216 1.028 7.148-1.696m.22-.232c1.435-.302 5.048 0 7.292 3.932M7.697 3.489c-1.107 1.944-1.365 7.113.231 9.036m3.719-1.636c-.754-1.836-1.3-6.33.448-8.64m-.583 4.092c1.747-.264 6.063.581 8.977 4.16" color="currentColor"></svg:path>`,
})
export class HugeiconsWaterPoloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
