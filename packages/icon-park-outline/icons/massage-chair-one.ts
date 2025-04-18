import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMassageChairOneIcon],svg[icon-park-outline-massage-chair-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M15 28V15.652C15 13 18 10 24 10s9 3 9 5.652V28m-21 6v-6h24v6zm8-30h8"></svg:path><svg:path d="M8 16v12h32V16M17 43h14m-7-9v9m0-39v6"></svg:path></svg:g>`,
})
export class IconParkOutlineMassageChairOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
