import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCompassIcon],svg[zmdi-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 193q9.5 0 16.5 6.5t7 16.5t-7 16.5t-16.5 6.5t-16.5-6.5t-7-16.5t7-16.5t16.5-6.5m0-190q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M260 263l81-175l-174 81l-82 175z"></svg:path>`,
})
export class ZmdiCompassIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
