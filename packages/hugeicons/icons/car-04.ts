import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCar04Icon],svg[hugeicons-car-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2.98 13.289c-.72 1.302-.922 2.914-.979 3.713a.47.47 0 0 0 .479.498h1.502M2.98 13.289c0-3.145.915-6.94 2.746-8.578a.88.88 0 0 1 .59-.211h4.795c.58 0 1.157.117 1.643.432c1.199.778 3.01 2.348 4.549 4.757c.127.2.317.35.54.431c.885.322 1.871.767 2.502 1.064c.426.2.766.55.927.992c.444 1.217.695 2.575.727 4.823a.495.495 0 0 1-.497.501H20M2.98 13.289c.36-.652.851-1.226 1.519-1.582M15.996 17.5h-8.01m.014 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="M20 17.5a2 2 0 1 1-4 0a2 2 0 0 1 4 0M17.5 10C14.5 9 11 8.5 7 9c0-2 1-4 1.5-4.5M8 11h1"></svg:path></svg:g>`,
})
export class HugeiconsCar04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
