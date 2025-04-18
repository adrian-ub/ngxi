import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiTabletIcon],svg[oi-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.34 0A.35.35 0 0 0 0 .34v7.31c0 .18.16.34.34.34h6.31c.18 0 .34-.16.34-.34V.34A.35.35 0 0 0 6.65 0zM1 1h5v5H1zm2.5 5.5c.38 0 .63.42.44.75s-.68.33-.88 0c-.19-.33.05-.75.44-.75"></svg:path>`,
})
export class OiTabletIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
