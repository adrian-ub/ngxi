import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsVueFillIcon],svg[akar-icons-vue-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.114 2H15l-3 4.9L9.429 2H0l12 21L24 2zM3 3.75h2.914L12 14.6l6.086-10.85H21L12 19.5z"></svg:path>`,
})
export class AkarIconsVueFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
