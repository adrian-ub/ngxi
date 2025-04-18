import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsConnectlifeIcon],svg[arcticons-connectlife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.2 35.7C9.738 35.7 4.5 30.462 4.5 24s5.238-11.7 11.7-11.7h15.6c6.462 0 11.7 5.238 11.7 11.7s-5.238 11.7-11.7 11.7z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.8 30.235a7.2 7.2 0 1 1 .53-12.133"></svg:path>`,
})
export class ArcticonsConnectlifeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
