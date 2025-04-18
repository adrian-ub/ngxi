import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAplayerIcon],svg[arcticons-aplayer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.647 30.442a18.161 18.161 0 1 1 0-12.885"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m43.5 28.171l-2.711-8.342l-2.816 8.342m.939-2.815h3.65"></svg:path><svg:circle cx="22.396" cy="24" r="7.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="22.396" cy="24" r=".782" fill="currentColor"></svg:circle>`,
})
export class ArcticonsAplayerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
