import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumTextAlignRightIcon],svg[circum-text-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.437 4.064H3.563a.5.5 0 0 1 0-1h16.874a.5.5 0 0 1 0 1m0 4.436h-9a.5.5 0 1 1 0-1h9a.5.5 0 0 1 0 1m0 8h-9a.5.5 0 1 1 0-1h9a.5.5 0 0 1 0 1m0-4H3.563a.5.5 0 0 1 0-1h16.874a.5.5 0 0 1 0 1m0 8.436H3.563a.5.5 0 1 1 0-1h16.874a.5.5 0 1 1 0 1"></svg:path>`,
})
export class CircumTextAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
