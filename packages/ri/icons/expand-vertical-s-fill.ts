import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandVerticalSFillIcon],svg[ri-expand-vertical-s-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.95 7.45L12 2.5L7.051 7.447H11v9.103H7.05L12 21.5l4.95-4.95H13V7.448z"></svg:path>`,
})
export class RiExpandVerticalSFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
