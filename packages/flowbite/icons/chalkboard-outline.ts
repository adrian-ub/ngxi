import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteChalkboardOutlineIcon],svg[flowbite-chalkboard-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 14H4m6.5 3L8 20m5.5-3l2.5 3M4.889 17H19.11c.491 0 .889-.416.889-.929V4.93c0-.513-.398-.929-.889-.929H4.89C4.398 4 4 4.416 4 4.929V16.07c0 .513.398.929.889.929M13 14v-3h4v3z"></svg:path>`,
})
export class FlowbiteChalkboardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
