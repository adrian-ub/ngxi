import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMassageChairOneIcon],svg[icon-park-twotone-massage-chair-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMassageChairOne0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M15 28V15.652C15 13 18 10 24 10s9 3 9 5.652V28"></svg:path><svg:path fill="#555" d="M12 34v-6h24v6z"></svg:path><svg:path d="M20 4h8M8 16v12h32V16M17 43h14m-7-9v9m0-39v6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMassageChairOne0)"></svg:path>`,
})
export class IconParkTwotoneMassageChairOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
