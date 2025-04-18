import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatOverlineRoundedIcon],svg[material-symbols-light-format-overline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.192 4.5q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143h11.616q.212 0 .356.144t.144.357t-.144.356t-.356.143zM12 20.308q-2.636 0-4.472-1.837T5.692 14T7.53 9.528T12 7.692t4.471 1.836T18.308 14t-1.836 4.472T12 20.308m0-1.116q2.164 0 3.678-1.514T17.192 14t-1.514-3.678T12 8.808t-3.678 1.514T6.808 14t1.514 3.678T12 19.192"></svg:path>`,
})
export class MaterialSymbolsLightFormatOverlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
