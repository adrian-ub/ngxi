import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsArrowAnchorUpRightIcon],svg[rivet-icons-arrow-anchor-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.207.793L15.414 5l-4.207 4.207l-1.414-1.414L11.586 6H3v8H1V4h10.586L9.793 2.207z"></svg:path>`,
})
export class RivetIconsArrowAnchorUpRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
