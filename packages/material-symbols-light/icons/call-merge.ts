import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCallMergeIcon],svg[material-symbols-light-call-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.016 19l-.708-.708L11.5 13.1V5.952L8.406 9.046l-.714-.713L12 4.025l4.314 4.314l-.714.713l-3.1-3.1v7.564zm9.969.006L13.4 15.427l.714-.713l3.578 3.584z"></svg:path>`,
})
export class MaterialSymbolsLightCallMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
