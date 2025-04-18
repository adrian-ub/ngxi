import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShioriForGenshinIcon],svg[arcticons-shiori-for-genshin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M45.5 24C33.6 24 24 14.4 24 2.5m0 0C24 14.4 14.4 24 2.5 24M24 45.5C24 33.6 33.6 24 45.5 24m-43 0C14.4 24 24 33.6 24 45.5"></svg:path>`,
})
export class ArcticonsShioriForGenshinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
