import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAptekaAprilIcon],svg[arcticons-apteka-april-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m26.303 27l-3.326 12.41q.51.061 1.023.09A15.5 15.5 0 0 0 39.18 27zm4.529-16.906L27.91 21h11.277a15.5 15.5 0 0 0-8.355-10.906M24 8.5C15.44 8.5 8.5 15.44 8.5 24a15.5 15.5 0 0 0 8.682 13.857l7.855-29.32A16 16 0 0 0 24 8.5"></svg:path>`,
})
export class ArcticonsAptekaAprilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
