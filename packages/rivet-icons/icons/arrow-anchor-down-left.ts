import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsArrowAnchorDownLeftIcon],svg[rivet-icons-arrow-anchor-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 10V2h2v10H4.414l1.793 1.793l-1.414 1.414L.586 11l4.207-4.207l1.414 1.414L4.414 10z"></svg:path>`,
})
export class RivetIconsArrowAnchorDownLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
