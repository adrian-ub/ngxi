import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mapCemeteryIcon],svg[map-cemetery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 1C15.062 1 7 8.909 7 18.664V49h36V18.664C43 8.909 34.944 1 25 1"></svg:path>`,
})
export class MapCemeteryIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
