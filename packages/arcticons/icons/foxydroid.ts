import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFoxydroidIcon],svg[arcticons-foxydroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 16.17l-9.24 5.33l-9.24 5.34V5.5l9.24 5.33zm0 0l9.24-5.34l9.24-5.33v21.34l-9.24-5.34z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.48 26.84L24 42.5V16.17l9.24 5.33zm-36.96 0l9.24-5.34L24 16.17V42.5z"></svg:path>`,
})
export class ArcticonsFoxydroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
