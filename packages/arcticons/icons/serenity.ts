import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSerenityIcon],svg[arcticons-serenity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.022 12.242a14.4 14.4 0 0 0-5.478 11.26A14.4 14.4 0 0 0 24 34.745a14.4 14.4 0 0 0 5.455-11.243a14.4 14.4 0 0 0-5.433-11.26"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.42 18.218a14.4 14.4 0 0 1 6.85-2.95h0a14.4 14.4 0 0 1-.924 12.47A14.4 14.4 0 0 1 24 34.746a14.4 14.4 0 0 0 12.465-.897A14.4 14.4 0 0 0 43.5 23.514h0a14.4 14.4 0 0 0-7.387-.875M19.58 18.218a14.4 14.4 0 0 0-6.85-2.95h0a14.4 14.4 0 0 0 .924 12.47A14.4 14.4 0 0 0 24 34.746a14.4 14.4 0 0 1-12.465-.897A14.4 14.4 0 0 1 4.5 23.514h0a14.4 14.4 0 0 1 7.387-.875"></svg:path>`,
})
export class ArcticonsSerenityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
