import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJoomIcon],svg[arcticons-joom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="16.227" cy="38.027" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="5.433" ry="5.414"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.621 43.5V16.89c0-7.758 6.855-12.266 11.551-12.39l.034 26.813c.012 9.423-8.289 12.18-11.585 12.187"></svg:path>`,
})
export class ArcticonsJoomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
