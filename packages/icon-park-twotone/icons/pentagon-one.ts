import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePentagonOneIcon],svg[icon-park-twotone-pentagon-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPentagonOne0"><svg:path fill="#555" stroke="#fff" stroke-width="4" d="m25.23 4.958l17.63 13.743a2 2 0 0 1 .654 2.25l-7.04 19.721A2 2 0 0 1 34.59 42H13.41a2 2 0 0 1-1.884-1.328l-7.04-19.721a2 2 0 0 1 .654-2.25L22.77 4.958a2 2 0 0 1 2.46 0Z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPentagonOne0)"></svg:path>`,
})
export class IconParkTwotonePentagonOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
