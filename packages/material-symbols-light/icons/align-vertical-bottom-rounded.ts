import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignVerticalBottomRoundedIcon],svg[material-symbols-light-align-vertical-bottom-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 20.5q-.213 0-.357-.143T3 20t.143-.357t.357-.143h17q.214 0 .357.143T21 20t-.143.357t-.357.143zm5.212-3.577q-.414 0-.717-.303t-.303-.716V4.5q0-.413.303-.716t.717-.303t.716.303t.303.716v11.404q0 .413-.303.716t-.716.303m6.577 0q-.414 0-.717-.303t-.303-.716V10.5q0-.413.303-.716t.717-.303t.716.303t.303.716v5.404q0 .413-.303.716t-.717.303"></svg:path>`,
})
export class MaterialSymbolsLightAlignVerticalBottomRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
