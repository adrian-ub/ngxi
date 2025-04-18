import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTwistIcon],svg[arcticons-twist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.89 5.197L6.8 21.734a2 2 0 0 0-1.127 1.8v18.33a1 1 0 0 0 1.456.89l14.654-7.504l6.158 4.728l4.033-10.372l9.393-5.734a2 2 0 0 0 .958-1.707V6.097a1 1 0 0 0-1.437-.9"></svg:path>`,
})
export class ArcticonsTwistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
