import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePlusCrossIcon],svg[icon-park-twotone-plus-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPlusCross0"><svg:path fill="#555" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M30 4H18v14H4v12h14v14h12V30h14V18H30z"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPlusCross0)"></svg:path>`,
})
export class IconParkTwotonePlusCrossIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
