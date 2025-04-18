import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaQuaverOffIcon],svg[nrk-media-quaver-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5v2h-4v7.034L17.633 22h-2.195L6.318 2h2.195L12 9.648V5zM8 13v4h2.96l.912 2H6v-8h2.224l.912 2z"></svg:path>`,
})
export class NrkMediaQuaverOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
