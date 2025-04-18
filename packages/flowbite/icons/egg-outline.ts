import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteEggOutlineIcon],svg[flowbite-egg-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 13c0-.888.402-2.383 1-3.272M18.05 14a6 6 0 1 1-12 0c0-3.314 2.686-10 6-10s6 6.686 6 10"></svg:path>`,
})
export class FlowbiteEggOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
