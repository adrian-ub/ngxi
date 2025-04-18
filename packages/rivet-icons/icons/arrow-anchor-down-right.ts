import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsArrowAnchorDownRightIcon],svg[rivet-icons-arrow-anchor-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2h2v8h8.586L9.793 8.207l1.414-1.414L15.414 11l-4.207 4.207l-1.414-1.414L11.586 12H1z"></svg:path>`,
})
export class RivetIconsArrowAnchorDownRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
