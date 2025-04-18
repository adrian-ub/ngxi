import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPepperIcon],svg[tabler-pepper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 11c0 2.21-2.239 4-5 4s-5-1.79-5-4a8 8 0 1 0 16 0a3 3 0 0 0-6 0"></svg:path><svg:path d="M16 8c0-2 2-4 4-4"></svg:path></svg:g>`,
})
export class TablerPepperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
