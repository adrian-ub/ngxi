import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsResizeDownRightLightIcon],svg[lets-icons-resize-down-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M10 20h10V10"></svg:path><svg:path d="M12 17h5v-5"></svg:path></svg:g>`,
})
export class LetsIconsResizeDownRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
