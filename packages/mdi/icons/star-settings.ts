import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStarSettingsIcon],svg[mdi-star-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22h2v2H7zm4 2h2v-2h-2zm4 0h2v-2h-2zm7-14.76l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21L12 17.27L18.18 21l-1.64-7.03z"></svg:path>`,
})
export class MdiStarSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
