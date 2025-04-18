import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psDryIcon],svg[ps-dry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M429 43q0-18-12.5-30.5T387 0H45Q28 0 15.5 12.5T3 43v426q0 18 12.5 30.5T45 512h342q17 0 29.5-12.5T429 469zm-42 426H45V43h342z"></svg:path>`,
})
export class PsDryIcon {
  readonly viewBox = input("0 0 432 512")
  readonly width = input("0.85em")
  readonly height = input("1em")
}
