import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUmassfiveIcon],svg[arcticons-umassfive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m43.5 20.898l-12.664-2.826l-3.48-11.856l-6.963 9.485l-15.893.353l12.966 9.435L5.913 38.656l16.296-7.063l9.132 10.191l-1.917-15.791z"></svg:path>`,
})
export class ArcticonsUmassfiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
