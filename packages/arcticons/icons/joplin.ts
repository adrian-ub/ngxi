import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJoplinIcon],svg[arcticons-joplin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.432 4.494H24.009L24 9.972h2.479a.996.996 0 0 1 1 .995c.002 3.766.008 17.169.008 21.825c0 2.461-1.815 3.432-3.791 3.432c-2.418 0-7.252-1.977-7.252-5.546a3.974 3.974 0 0 1 4.234-4.27a6.5 6.5 0 0 1 3.295 1.057v-7.169a14.7 14.7 0 0 0-4.476-.654c-5.862 0-9.929 4.904-9.929 11.156c0 6.897 5.272 12.708 14.579 12.708c5.665 0 10.807-3.848 10.807-10.77V10.972a1 1 0 0 1 1-1h2.478Z"></svg:path>`,
})
export class ArcticonsJoplinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
