import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagId4x3Icon],svg[flag-id-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e70011" d="M0 0h640v240H0Z"></svg:path><svg:path fill="#fff" d="M0 240h640v240H0Z"></svg:path>`,
})
export class FlagId4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
