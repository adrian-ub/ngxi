import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEaSportsFcCompanionIcon],svg[arcticons-ea-sports-fc-companion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4m3.752 18.903h8.454"></svg:path><svg:path d="m32.418 27.365l-2.064 3.456h0h-7.495c-.518 0-.725-.36-.464-.808l7.02-12.026c.26-.448.888-.808 1.406-.808H38.5l-2.063 3.454m-10.349-3.454H18.41c-.519 0-1.146.36-1.407.808L9.5 30.82"></svg:path></svg:g>`,
})
export class ArcticonsEaSportsFcCompanionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
