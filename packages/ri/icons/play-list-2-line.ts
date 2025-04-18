import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPlayList2LineIcon],svg[ri-play-list-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18v2H2v-2zM2 3.5l8 5l-8 5zM22 11v2H12v-2zM4 7.109v2.783L6.226 8.5zM22 4v2H12V4z"></svg:path>`,
})
export class RiPlayList2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
