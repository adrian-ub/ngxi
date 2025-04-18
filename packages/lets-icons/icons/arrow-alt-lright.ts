import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowAltLrightIcon],svg[lets-icons-arrow-alt-lright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 12l.707-.707l.707.707l-.707.707zM6 13a1 1 0 1 1 0-2zm8.707-5.707l4 4l-1.414 1.414l-4-4zm4 5.414l-4 4l-1.414-1.414l4-4zM18 13H6v-2h12z"></svg:path>`,
})
export class LetsIconsArrowAltLrightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
