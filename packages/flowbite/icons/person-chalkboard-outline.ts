import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbitePersonChalkboardOutlineIcon],svg[flowbite-person-chalkboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.571 5h7v9h-7m-6-4l-3 4.5m3-4.5v5m0-5h3m0 0h5m-5 0v5m-3 0h3m-3 0v5m3-5v5m6-6l2.5 6m-3-6l-2.5 6m-3-14.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class FlowbitePersonChalkboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
