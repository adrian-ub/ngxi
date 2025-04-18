import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundWaterDamageIcon],svg[ic-round-water-damage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.33 3.6l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0M12 16c-1.1 0-2-.9-2-2c0-.78.99-2.44 1.58-3.36c.2-.31.64-.31.84 0c.59.92 1.58 2.58 1.58 3.36c0 1.1-.9 2-2 2"></svg:path>`,
})
export class IcRoundWaterDamageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
