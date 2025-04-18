import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBepttIcon],svg[arcticons-beptt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.25 21.214c3.158 0 5.468-2.494 5.468-5.571s-2.31-5.572-5.468-5.572h-5.967v11.143zm-.5 16.715c-3.158 0-5.467-2.494-5.467-5.571s2.31-5.572 5.467-5.572h5.968V37.93z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.435 43.5H24c-6.315 0-11.435-3.989-11.435-10.143V4.5H24c6.315 0 11.435 3.989 11.435 10.143z"></svg:path>`,
})
export class ArcticonsBepttIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
