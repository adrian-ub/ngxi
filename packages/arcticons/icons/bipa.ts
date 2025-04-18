import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBipaIcon],svg[arcticons-bipa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.887 7.969C10.704 6.424 15.553 5.5 20.832 5.5c12.3 0 21.347 5.019 21.347 11.21s-9.046 11.209-21.347 11.209c-8.29 0-15.01-1.755-15.01-3.919s6.72-3.919 15.01-3.919c12.3 0 21.347 5.019 21.347 11.21S33.133 42.5 20.832 42.5c-5.279 0-10.128-.925-13.945-2.47"></svg:path>`,
})
export class ArcticonsBipaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
