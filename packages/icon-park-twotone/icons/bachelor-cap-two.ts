import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBachelorCapTwoIcon],svg[icon-park-twotone-bachelor-cap-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBachelorCapTwo0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path d="M11 21v15.039c0 .607.274 1.18.785 1.509C13.486 38.643 17.86 41 24 41s10.514-2.357 12.215-3.452c.51-.33.785-.902.785-1.51V21"></svg:path><svg:path stroke-linecap="round" d="M43 24v8"></svg:path><svg:path fill="#555" stroke-linecap="round" d="M5 17L24 7l19 10l-19 10z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBachelorCapTwo0)"></svg:path>`,
})
export class IconParkTwotoneBachelorCapTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
