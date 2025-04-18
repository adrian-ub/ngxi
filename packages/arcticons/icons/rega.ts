import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRegaIcon],svg[arcticons-rega-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.384 17.5H13.181l3.384-13h14.202zm10.818 13H24l3.384-13h14.202zm-17.586 13H6.414l3.384-13H24z"></svg:path>`,
})
export class ArcticonsRegaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
