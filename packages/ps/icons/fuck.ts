import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psFuckIcon],svg[ps-fuck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 276q0 58 36.5 102t93.5 51q68 8 118-36t50-111v-64q0-13-11-28t-31-15v107q0 47-35 79t-83 28q-41-7-68.5-39.5T45 276V152q-17 0-29.5 12.5T3 195zm192-145v85h42v-85q0-22-21-22t-21 22M131 24v192h42V24q0-21-21-21t-21 21M67 131v85h42v-85q0-22-21-22t-21 22"></svg:path>`,
})
export class PsFuckIcon {
  readonly viewBox = input("0 0 304 472")
  readonly width = input("0.65em")
  readonly height = input("1em")
}
