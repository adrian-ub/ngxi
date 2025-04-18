import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsArrowAnchorUpLeftIcon],svg[rivet-icons-arrow-anchor-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.414 6l1.793 1.793l-1.414 1.414L.586 5L4.793.793l1.414 1.414L4.414 4H15v10h-2V6z"></svg:path>`,
})
export class RivetIconsArrowAnchorUpLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
