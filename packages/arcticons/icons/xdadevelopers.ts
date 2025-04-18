import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXdadevelopersIcon],svg[arcticons-xdadevelopers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.541 16.607v14.786"></svg:path><svg:rect width="7.393" height="9.834" x="20.148" y="21.559" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.696" ry="3.696"></svg:rect><svg:rect width="7.393" height="9.834" x="31.107" y="21.559" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.696" ry="3.696"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 21.559v9.834m-21.607-9.834L9.5 31.393m7.393 0L9.5 21.559M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsXdadevelopersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
