import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirWindowsIcon],svg[iconoir-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M4 16.987V7.013a.6.6 0 0 1 .507-.593l14.8-2.313A.6.6 0 0 1 20 4.7v14.598a.6.6 0 0 1-.693.593l-14.8-2.313A.6.6 0 0 1 4 16.986ZM4 12h16m-9.5-6.5v13"></svg:path>`,
})
export class IconoirWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
