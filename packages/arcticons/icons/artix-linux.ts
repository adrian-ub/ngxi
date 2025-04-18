import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArtixLinuxIcon],svg[arcticons-artix-linux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.5 5.5l-6.5 13l18 10zm19 37l-5.5-10l-10 5zm-37 0L15 23l18 7.5z"></svg:path>`,
})
export class ArcticonsArtixLinuxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
