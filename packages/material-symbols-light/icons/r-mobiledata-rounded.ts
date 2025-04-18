import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRMobiledataRoundedIcon],svg[material-symbols-light-r-mobiledata-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7.35V9.5q0 .214-.143.357T3.5 10t-.357-.143T3 9.5V3.808q0-.348.23-.578T3.808 3h3.577q.69 0 1.153.463T9 4.615V5.85q0 .466-.37.886q-.368.42-.907.541l.88 2.064q.105.238-.036.449q-.14.21-.41.21q-.14 0-.259-.073q-.12-.073-.186-.208L6.696 7.35zm0-1h3.385q.269 0 .442-.173T8 5.735v-1.12q0-.269-.173-.442T7.385 4H4z"></svg:path>`,
})
export class MaterialSymbolsLightRMobiledataRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
