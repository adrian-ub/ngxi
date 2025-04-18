import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMylinkIcon],svg[arcticons-mylink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.023 20.334a8.172 8.172 0 1 1 .523 8.227m-.061-.092l-5.595-9.69m-2.913 8.887a8.172 8.172 0 1 1-.523-8.227m.061.092l5.595 9.69"></svg:path>`,
})
export class ArcticonsMylinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
