import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKanopyIcon],svg[arcticons-kanopy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.32 5.112l6.324-.612v39m8.073-24.623h11.152M16.644 34.391l15.557-15.514m-9.81 9.783l12.345 14.789m-8.135 0H37.68m-16.918.051H10.32"></svg:path>`,
})
export class ArcticonsKanopyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
