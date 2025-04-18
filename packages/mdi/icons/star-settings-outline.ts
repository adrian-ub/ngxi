import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStarSettingsOutlineIcon],svg[mdi-star-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22h2v2h-2zm-4 2h2v-2H7zm8 0h2v-2h-2zm1.54-10.03L18.18 21L12 17.27L5.82 21l1.63-7.03L2 9.24l7.19-.61L12 2l2.81 6.63l7.19.61zm-.78 3.69l-.99-4.28l3.32-2.88l-4.38-.37L12 6.09l-1.71 4.04l-4.38.37l3.32 2.88l-.99 4.28L12 15.39z"></svg:path>`,
})
export class MdiStarSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
