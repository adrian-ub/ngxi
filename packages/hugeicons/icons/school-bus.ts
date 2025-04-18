import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSchoolBusIcon],svg[hugeicons-school-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 19v3m-11-3v3M4 10c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10v3c0 2.828 0 4.243-.879 5.121C18.243 19 16.828 19 14 19h-4c-2.828 0-4.243 0-5.121-.879C4 17.243 4 15.828 4 13zm3 6h1m8 0h1M2 8v2m20-2v2M4.5 5h15m-15 8h15M12 13V5" color="currentColor"></svg:path>`,
})
export class HugeiconsSchoolBusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
