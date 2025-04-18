import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteOpenDoorOutlineIcon],svg[flowbite-open-door-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 18V6h-5v12zm0 0h2M4 18h2.5m3.5-5.5V12M6 6l7-2v16l-7-2z"></svg:path>`,
})
export class FlowbiteOpenDoorOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
