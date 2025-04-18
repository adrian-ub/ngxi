import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJockeyIcon],svg[arcticons-jockey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.088 4.5h15.08l-.029 27.892C30.133 38.717 25.31 43.5 19.348 43.5S8.585 38.717 8.585 32.776s4.8-10.724 10.763-10.724h7.008m7.596 0h5.463"></svg:path>`,
})
export class ArcticonsJockeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
