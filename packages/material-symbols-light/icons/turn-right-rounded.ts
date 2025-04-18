import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTurnRightRoundedIcon],svg[material-symbols-light-turn-right-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.48 18.5v-7.384q0-.672.473-1.144q.472-.472 1.143-.472h8.989l-1.747-1.746q-.14-.14-.15-.344t.15-.364t.354-.16t.354.16l2.389 2.389q.242.242.242.565t-.242.566l-2.389 2.388q-.14.14-.344.15t-.363-.15t-.16-.354t.16-.354l1.746-1.746H9.096q-.269 0-.442.173t-.173.443V18.5q0 .214-.143.357T7.98 19t-.357-.143t-.143-.357"></svg:path>`,
})
export class MaterialSymbolsLightTurnRightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
