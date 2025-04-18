import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsRIcon],svg[healthicons-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 12a2 2 0 0 1 2-2h10a8 8 0 0 1 2.954 15.437l4.835 9.669a2 2 0 0 1-3.578 1.788L24.764 26H18v10a2 2 0 1 1-4 0zm4 10h8a4 4 0 0 0 0-8h-8z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsRIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
