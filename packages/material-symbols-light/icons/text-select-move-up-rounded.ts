import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextSelectMoveUpRoundedIcon],svg[material-symbols-light-text-select-move-up-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 20h-15q-.213 0-.356-.144T4 19.499t.144-.356T4.5 19h15q.213 0 .356.144t.144.357t-.144.356T19.5 20m-8-10.367L9.754 11.36q-.14.14-.341.15q-.202.01-.371-.16q-.155-.156-.155-.35t.16-.354l2.388-2.388q.242-.242.565-.242t.566.242l2.388 2.388q.14.14.153.341t-.157.371q-.156.156-.35.146t-.354-.15L12.5 9.633V16q0 .213-.144.356t-.357.144t-.356-.144T11.5 16zM19.5 5h-15q-.213 0-.356-.144T4 4.499t.144-.356T4.5 4h15q.213 0 .356.144t.144.357t-.144.356T19.5 5"></svg:path>`,
})
export class MaterialSymbolsLightTextSelectMoveUpRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
