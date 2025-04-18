import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons91mobilesIcon],svg[arcticons-91mobiles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.94 17.3l4.56-2.507v18.414m-20.468-2.246c1.006 1.332 2.54 2.246 5.083 2.246h.425c3.337 0 6.041-2.73 6.041-6.1v-6.215"></svg:path><svg:circle cx="19.539" cy="20.892" r="6.039" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class Arcticons91mobilesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
