import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psDryInTheShadeIcon],svg[ps-dry-in-the-shade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 43v426q0 18 12.5 30.5T45 512h342q17 0 29.5-12.5T429 469V43q0-18-12.5-30.5T387 0H45Q28 0 15.5 12.5T3 43m98 0L45 98V43zM45 158L161 43h46L45 205zm342 311H45V265L267 43h120z"></svg:path>`,
})
export class PsDryInTheShadeIcon {
  readonly viewBox = input("0 0 432 512")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
