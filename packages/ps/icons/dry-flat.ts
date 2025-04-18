import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psDryFlatIcon],svg[ps-dry-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M45 0Q28 0 15.5 12.5T3 43v426q0 18 12.5 30.5T45 512h342q17 0 29.5-12.5T429 469V43q0-18-12.5-30.5T387 0zm342 469H45V43h342zM88 277h256q21 0 21-21t-21-21H88q-21 0-21 21t21 21"></svg:path>`,
})
export class PsDryFlatIcon {
  readonly viewBox = input("0 0 432 512")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
