import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsElectricWireIcon],svg[hugeicons-electric-wire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21V9h-2c-.943 0-1.414 0-1.707.293S8 10.057 8 11v10m8 0V11c0-.943 0-1.414-.293-1.707S14.943 9 14 9h-2v12m8-16v4m2-2h-4M6 7H2m8 2V6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C8.398 3 7.932 3 7 3m7 6V6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C15.602 3 16.068 3 17 3" color="currentColor"></svg:path>`,
})
export class HugeiconsElectricWireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
