import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEyeDollarIcon],svg[tabler-eye-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"></svg:path><svg:path d="M13.193 17.924q-.585.075-1.193.076q-5.4 0-9-6q3.6-6 9-6q4.508 0 7.761 4.181M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17m2 0v1m0-8v1"></svg:path></svg:g>`,
})
export class TablerEyeDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
