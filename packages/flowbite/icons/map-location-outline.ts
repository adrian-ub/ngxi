import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteMapLocationOutlineIcon],svg[flowbite-map-location-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path d="M17.8 14a7 7 0 1 0-11.5 0h0l.1.3l.3.3L12 21l5.1-6.2l.6-.7l.1-.2Z"></svg:path></svg:g>`,
})
export class FlowbiteMapLocationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
