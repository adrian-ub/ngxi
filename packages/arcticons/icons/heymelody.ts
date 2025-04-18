import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHeymelodyIcon],svg[arcticons-heymelody-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 15.643v16.714A11.143 11.143 0 0 0 35.143 43.5h0V15.643A11.143 11.143 0 1 0 24 26.786"></svg:path>`,
})
export class ArcticonsHeymelodyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
