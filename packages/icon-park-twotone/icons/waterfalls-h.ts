import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneWaterfallsHIcon],svg[icon-park-twotone-waterfalls-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTWaterfallsH0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M20 6H6v11h14zm22 25H28v11h14zm0-25H28v17h14zM20 25H6v17h14z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTWaterfallsH0)"></svg:path>`,
})
export class IconParkTwotoneWaterfallsHIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
