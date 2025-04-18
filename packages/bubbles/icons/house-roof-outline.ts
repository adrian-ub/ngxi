import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesHouseRoofOutlineIcon],svg[bubbles-house-roof-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m1.5 9.744l10.5-9l10.5 9"></svg:path><svg:path d="M12 5.244L3.377 12.61c-.224.208-.36.495-.377.8v8.855a.98.98 0 0 0 .978.978H9.75v-7.01a.49.49 0 0 1 .489-.49h3.522a.49.49 0 0 1 .489.49v7.01h5.772a.98.98 0 0 0 .978-.977V13.41a1.2 1.2 0 0 0-.377-.8z"></svg:path></svg:g>`,
})
export class BubblesHouseRoofOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
