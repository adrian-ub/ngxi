import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBuildingFourIcon],svg[icon-park-twotone-building-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBuildingFour0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" fill-rule="evenodd" d="m17 14l27 10v20H17z" clip-rule="evenodd"></svg:path><svg:path d="M17 14L4 24v20h13m18 0V32l-9-3v15m18 0H17"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBuildingFour0)"></svg:path>`,
})
export class IconParkTwotoneBuildingFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
