import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteVolumeUpOutlineIcon],svg[flowbite-volume-up-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.5 8.43A5 5 0 0 1 17 12a4.98 4.98 0 0 1-1.43 3.5m2.794 2.864A8.97 8.97 0 0 0 21 12a8.97 8.97 0 0 0-2.636-6.364M12 6.135v11.73a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2l4.36-3.633a1 1 0 0 1 1.64.768"></svg:path>`,
})
export class FlowbiteVolumeUpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
