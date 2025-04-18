import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOpenwortIcon],svg[arcticons-openwort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.635 20.039L24 5.5l-9.25 37l-9.25-37m28.907 32.373L33.25 42.5l-1.157-4.627M42.5 5.5l-3.635 14.539M22.573 31.161h19.83v4.412h-19.83z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.573 26.75h19.83v4.412h-19.83zm0-4.412h19.83v4.412h-19.83z"></svg:path>`,
})
export class ArcticonsOpenwortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
