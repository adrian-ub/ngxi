import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiScaleBathroomIcon],svg[mdi-scale-bathroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m7 2a4 4 0 0 0-4 4h3.26l-.41-2.77L12.9 8H16a4 4 0 0 0-4-4m-7 6v10h14V10z"></svg:path>`,
})
export class MdiScaleBathroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
