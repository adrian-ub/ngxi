import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsThelifeIcon],svg[arcticons-thelife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 41.875l17.469-9.75v-16.25h-6.5v-4.062h6.5V6.125h4.062v5.688h6.5v4.062h-6.5v16.25l17.469 9.75"></svg:path>`,
})
export class ArcticonsThelifeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
