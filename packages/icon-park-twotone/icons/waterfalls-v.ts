import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneWaterfallsVIcon],svg[icon-park-twotone-waterfalls-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTWaterfallsV0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M23 20V6H6v14zm19 22V28H25v14zM31 6v14h11V6zM6 28v14h11V28z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTWaterfallsV0)"></svg:path>`,
})
export class IconParkTwotoneWaterfallsVIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
