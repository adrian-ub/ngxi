import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPresencepublisherIcon],svg[arcticons-presencepublisher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 21.06v-3.63m14.72 10.06A15.68 15.68 0 0 0 30 18.34m13.5 7.43a20.74 20.74 0 0 0-14.76-13.16M9.28 27.49A15.68 15.68 0 0 1 18 18.34M4.5 25.77a20.74 20.74 0 0 1 14.76-13.16m4.74 0l1.79 4.58h-3.56z"></svg:path><svg:circle cx="24" cy="30.56" r="4.84" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsPresencepublisherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
