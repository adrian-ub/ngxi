import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapCircleIcon],svg[map-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="25" cy="25" r="24" fill="currentColor"></svg:circle>`,
})
export class MapCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
