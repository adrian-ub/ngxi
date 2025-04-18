import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandVerticalSLineIcon],svg[ri-expand-vertical-s-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.95 7.45L12 2.5L7.051 7.447L8.466 8.86L11 6.328V17.67l-2.536-2.535L7.05 16.55L12 21.5l4.95-4.95l-1.414-1.414L13 17.672V6.328l2.535 2.535z"></svg:path>`,
})
export class RiExpandVerticalSLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
