import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteFlaskOutlineIcon],svg[flowbite-flask-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.05 3v5c-2.719.934-5 3.24-5 6.2c0 3.756 3.134 6.8 7 6.8s7-3.044 7-6.8c0-2.96-2.281-5.266-5-6.2V3m-4 0h4m-4 0h-2m6 0h2M5.098 15h13.904"></svg:path>`,
})
export class FlowbiteFlaskOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
