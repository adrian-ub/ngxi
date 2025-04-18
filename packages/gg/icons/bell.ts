import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBellIcon],svg[gg-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 3v.29c2.892.86 5 3.539 5 6.71v7h1v2H4v-2h1v-7a7 7 0 0 1 5-6.71V3a2 2 0 1 1 4 0M7 17h10v-7a5 5 0 0 0-10 0zm7 4v-1h-4v1a2 2 0 1 0 4 0" clip-rule="evenodd"></svg:path>`,
})
export class GgBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
