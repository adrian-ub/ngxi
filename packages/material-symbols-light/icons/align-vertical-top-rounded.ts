import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignVerticalTopRoundedIcon],svg[material-symbols-light-align-vertical-top-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.712 20.5q-.414 0-.717-.303t-.303-.716V8.077q0-.413.303-.716t.717-.303t.716.303q.303.303.303.716v11.404q0 .413-.303.716t-.717.303m6.577-6q-.413 0-.716-.303t-.303-.716V8.077q0-.413.303-.716t.717-.303t.716.303q.303.303.303.716v5.404q0 .413-.303.716t-.716.303M3.5 4.48q-.213 0-.357-.142T3 3.98t.143-.357t.357-.143h17q.214 0 .357.143T21 3.98t-.143.357t-.357.143z"></svg:path>`,
})
export class MaterialSymbolsLightAlignVerticalTopRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
