import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWaterfallsVIcon],svg[icon-park-outline-waterfalls-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M23 20V6H6v14zm19 22V28H25v14zM31 6v14h11V6zM6 28v14h11V28z"></svg:path>`,
})
export class IconParkOutlineWaterfallsVIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
