import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteBedOutlineIcon],svg[flowbite-bed-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 17v2M12 5.5V10m-6 7v2m15-2v-4a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v4zm-2-7V8a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2z"></svg:path>`,
})
export class FlowbiteBedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
