import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoolapkIcon],svg[arcticons-coolapk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.208 20.416c-4.112-3.263-7.945-6.067-12.057-6.067a9.65 9.65 0 0 0 0 19.302c5.809 0 15.723-11.615 18.649-18.734L43.5 33.65c-2.888-2.22-7.995-5.996-12.8-9.651"></svg:path>`,
})
export class ArcticonsCoolapkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
