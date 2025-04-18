import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFigmaResetInstanceIcon],svg[icon-park-outline-figma-reset-instance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24L24 4L4 24l20 20l11-11"></svg:path><svg:path d="M22 24s12.5-.5 17.5 4.5S39 44 39 44"></svg:path><svg:path d="m26 20l-4 4l4 4"></svg:path></svg:g>`,
})
export class IconParkOutlineFigmaResetInstanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
