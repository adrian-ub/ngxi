import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteWineGlassOutlineIcon],svg[flowbite-wine-glass-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14c2.761 0 5-2.668 5-5.43c0-1.385-1.12-4.507-1.5-5.57h-7C8.152 4.021 7 7.172 7 8.57C7 11.333 9.239 14 12 14m0 0v7m0 0H9m3 0h3M7 9h9"></svg:path>`,
})
export class FlowbiteWineGlassOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
