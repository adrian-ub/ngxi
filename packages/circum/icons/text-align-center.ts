import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumTextAlignCenterIcon],svg[circum-text-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.437 4.063H3.563a.5.5 0 1 1 0-1h16.874a.5.5 0 1 1 0 1M16.5 8.5h-9a.5.5 0 0 1 0-1h9a.5.5 0 0 1 0 1m0 8h-9a.5.5 0 1 1 0-1h9a.5.5 0 1 1 0 1m3.937-4H3.563a.5.5 0 0 1 0-1h16.874a.5.5 0 0 1 0 1m0 8.437H3.563a.5.5 0 1 1 0-1h16.874a.5.5 0 0 1 0 1"></svg:path>`,
})
export class CircumTextAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
