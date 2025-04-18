import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteWineBottleOutlineIcon],svg[flowbite-wine-bottle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 8h4m-3-5a1 1 0 0 0-1 1v6c-2 1-2 2.5-2 4.5V20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-5.5c0-2 0-3.5-2-4.5V4a1 1 0 0 0-1-1zm5 10h-4v5h4z"></svg:path>`,
})
export class FlowbiteWineBottleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
