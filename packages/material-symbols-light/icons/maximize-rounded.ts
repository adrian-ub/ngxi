import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMaximizeRoundedIcon],svg[material-symbols-light-maximize-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 5q-.213 0-.356-.144T5 4.499t.144-.356T5.5 4h13q.213 0 .356.144t.144.357t-.144.356T18.5 5z"></svg:path>`,
})
export class MaterialSymbolsLightMaximizeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
