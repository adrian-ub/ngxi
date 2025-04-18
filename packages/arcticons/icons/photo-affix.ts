import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPhotoAffixIcon],svg[arcticons-photo-affix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.246 7.816H9.99a3 3 0 0 0-3 3v28.02a3 3 0 0 0 3 3h28.02a3 3 0 0 0 3-3v-28.02a3 3 0 0 0-3-3H27.754M41.01 37.723l-13.65-11.17m-3.375 5.693l11.692 9.59"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.266 41.836L26.682 29.99a1.97 1.97 0 0 0 .725-1.529v-2.02l-.038-11.528h6.893L24.005 3.836L13.75 14.913h6.892v11.59L6.99 37.67"></svg:path>`,
})
export class ArcticonsPhotoAffixIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
