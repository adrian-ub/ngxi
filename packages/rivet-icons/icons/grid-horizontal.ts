import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsGridHorizontalIcon],svg[rivet-icons-grid-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3H1v2h2zm0 4H1v2h2zm-2 4h2v2H1zm6-8H5v2h2zM5 7h2v2H5zm2 4H5v2h2zm2-8h2v2H9zm6 0h-2v2h2zM9 7h2v2H9zm6 0h-2v2h2zm-6 4h2v2H9zm6 0h-2v2h2z"></svg:path>`,
})
export class RivetIconsGridHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
