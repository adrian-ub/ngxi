import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFormatTextClipRoundedIcon],svg[material-symbols-light-format-text-clip-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.576 19.5q-.212 0-.356-.144T5.077 19V5q0-.213.144-.356q.144-.144.357-.144t.356.144t.143.356v14q0 .213-.144.356t-.357.144m12.847 0q-.213 0-.357-.144T17.923 19v-6.5H9.346q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143h8.577V5q0-.213.144-.356t.357-.144t.356.144t.143.356v14q0 .213-.144.356q-.144.144-.356.144"></svg:path>`,
})
export class MaterialSymbolsLightFormatTextClipRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
