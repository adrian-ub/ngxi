import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixContactDetailsIcon],svg[ix-contact-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667V85.333zM426.667 128H85.334v256h341.333zM384 298.666v32H277.334v-32zm-194.666-57.6c30.826 0 56 25.6 56 57.6h-128c0-32 25.072-57.6 56-57.6zm194.666-6.4v32H277.334v-32zM181.334 163.96c15.464 0 28 12.536 28 28s-12.536 28-28 28s-28-12.536-28-28s12.536-28 28-28M384 170.666v32H277.334v-32z"></svg:path>`,
})
export class IxContactDetailsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
