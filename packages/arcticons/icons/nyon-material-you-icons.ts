import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNyonMaterialYouIconsIcon],svg[arcticons-nyon-material-you-icons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="34.5" cy="13.5" r="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13.5" cy="34.5" r="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.5 21.5h-16v-16c8.837 0 16 7.163 16 16c0 1.38 1.12 2.5 2.5 2.5s2.5 1.12 2.5 2.5c0 8.837 7.163 16 16 16v-16h-16"></svg:path>`,
})
export class ArcticonsNyonMaterialYouIconsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
