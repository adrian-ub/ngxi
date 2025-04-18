import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoshupIcon],svg[arcticons-moshup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.05 36.95v-25.9L24 31.4l12.95-20.35v25.9"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 5.5h8.597L24 21.062L33.904 5.5H42.5v37H31.4V30.109L24 41.738l-7.4-11.629V42.5H5.5z"></svg:path>`,
})
export class ArcticonsMoshupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
