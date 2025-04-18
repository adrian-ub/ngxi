import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPocketCampIcon],svg[arcticons-pocket-camp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.9 12.455c1.08-1.606 6.77-2.043 9.948-3.53c-3.043-1.22-8.255-2.387-10.053-3.425zM24.459 33.4l-5.592 8.739l-11.773-.555l17.754-27.641L40.906 42.5l-11.653-.365z"></svg:path>`,
})
export class ArcticonsPocketCampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
