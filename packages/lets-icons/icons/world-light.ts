import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsWorldLightIcon],svg[lets-icons-world-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="12" cy="12" r="8"></svg:circle><svg:path d="M18.208 6.785c-.733.676-1.654 1.224-2.697 1.606s-2.187.59-3.348.608a10.4 10.4 0 0 1-3.378-.505c-1.064-.35-2.013-.87-2.782-1.523m12.319 10.353c-.74-.716-1.685-1.297-2.767-1.699A10.2 10.2 0 0 0 12.078 15a10.3 10.3 0 0 0-3.492.574c-1.092.386-2.053.953-2.811 1.657M12 4v16m8-8H4"></svg:path></svg:g>`,
})
export class LetsIconsWorldLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
