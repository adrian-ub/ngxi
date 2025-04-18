import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPantIcon],svg[arcticons-pant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.42 34.816c-13.527-9.872-.914-23.763 8.47-23.032m-.899 6.439l12.734-6.094l-10.662-5.788zm19.589-5.039c13.527 9.872.914 23.764-8.47 23.032m.899-6.439l-12.734 6.094l10.662 5.788z"></svg:path>`,
})
export class ArcticonsPantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
