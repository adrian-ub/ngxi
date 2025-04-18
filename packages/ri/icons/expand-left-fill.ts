import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandLeftFillIcon],svg[ri-expand-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5v6h6v2h-6v6l-7-7zm8 14V5h2v14z"></svg:path>`,
})
export class RiExpandLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
