import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDiskinfoIcon],svg[arcticons-diskinfo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.881 28.972a21.48 21.48 0 0 1-15.928 15.93m-9.941 0A21.484 21.484 0 0 1 2.5 24c0-9.95 6.832-18.6 16.512-20.902m9.942 0a21.48 21.48 0 0 1 15.93 15.941"></svg:path>`,
})
export class ArcticonsDiskinfoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
