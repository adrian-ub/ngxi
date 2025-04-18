import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumTextAlignJustifyIcon],svg[circum-text-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.437 4.064H3.563a.5.5 0 0 1 0-1h16.874a.5.5 0 0 1 0 1m0 4.436H3.563a.5.5 0 0 1 0-1h16.874a.5.5 0 0 1 0 1m0 8H3.563a.5.5 0 1 1 0-1h16.874a.5.5 0 0 1 0 1m0-4H3.563a.5.5 0 0 1 0-1h16.874a.5.5 0 0 1 0 1m0 8.436H3.563a.5.5 0 1 1 0-1h16.874a.5.5 0 1 1 0 1"></svg:path>`,
})
export class CircumTextAlignJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
