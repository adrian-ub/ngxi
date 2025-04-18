import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignHorizontalRightRoundedIcon],svg[material-symbols-light-align-horizontal-right-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.73 21q-.213 0-.356-.143t-.143-.357v-17q0-.213.143-.357T19.731 3t.356.143t.144.357v17q0 .214-.144.357t-.356.143m-8.942-4.692q-.414 0-.717-.303t-.303-.717t.303-.716t.717-.303h4.846q.413 0 .716.303t.303.716t-.303.717q-.303.303-.716.303zm-6-6.577q-.414 0-.717-.303t-.303-.717t.303-.716t.717-.303h10.846q.413 0 .716.303t.303.716t-.303.717t-.716.303z"></svg:path>`,
})
export class MaterialSymbolsLightAlignHorizontalRightRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
