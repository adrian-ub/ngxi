import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons23andmeIcon],svg[arcticons-23andme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.557 3.5L15.443 37.534m1.079-29.202L27.356 44.5"></svg:path>`,
})
export class Arcticons23andmeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
