import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignHorizontalLeftRoundedIcon],svg[material-symbols-light-align-horizontal-left-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.27 21q-.214 0-.357-.143t-.144-.357v-17q0-.213.144-.357T4.269 3t.357.143t.143.357v17q0 .214-.143.357T4.269 21m4.097-4.692q-.414 0-.717-.303t-.303-.717t.303-.716t.717-.303h4.846q.413 0 .716.303t.303.716t-.303.717q-.303.303-.716.303zm0-6.577q-.414 0-.717-.303t-.303-.717t.303-.716t.717-.303h10.846q.413 0 .716.303t.303.716t-.303.717t-.716.303z"></svg:path>`,
})
export class MaterialSymbolsLightAlignHorizontalLeftRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
