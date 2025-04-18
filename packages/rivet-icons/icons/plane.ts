import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsPlaneIcon],svg[rivet-icons-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.662 8L.684 15.815L1.986 8L.684.185zM3.847 9l-.53 3.185L11.337 8L3.316 3.815L3.847 7H7v2z"></svg:path>`,
})
export class RivetIconsPlaneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
