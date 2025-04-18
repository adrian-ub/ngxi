import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMobileOffOutlineRoundedIcon],svg[material-symbols-light-mobile-off-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.492 22.408L1.362 3.277q-.14-.14-.15-.344t.15-.364t.353-.16t.354.16L21.2 21.7q.14.14.15.344t-.15.364t-.354.16t-.354-.16M6 7.213l1 1V18.5h9.927L18 19.573v.812q0 .666-.475 1.14t-1.14.475h-8.77q-.666 0-1.14-.475T6 20.386zM7 19.5v.885q0 .269.173.442t.443.173h8.769q.269 0 .442-.173t.173-.443V19.5zm0 0V21zm1.052-14q-.207 0-.341-.144t-.134-.357t.144-.356t.356-.143H17v-.885q0-.269-.173-.442T16.385 3H7q-.213 0-.356-.144T6.5 2.499t.144-.356T7 2h9.385q.69 0 1.152.463T18 3.616v11q0 .212-.144.356t-.357.144t-.356-.144t-.143-.356V5.5zm3.546-1"></svg:path>`,
})
export class MaterialSymbolsLightMobileOffOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
