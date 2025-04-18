import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsLaptopOutlineIcon],svg[healthicons-laptop-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.057 31.477A2 2 0 0 1 7 31V12a2 2 0 0 1 2-2h30a2 2 0 0 1 2 2v19c0 .244-.044.477-.123.693l3.111 4.76A1 1 0 0 1 43.151 38H4.8a1 1 0 0 1-.85-1.528zM9 12h30v19H9z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsLaptopOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
