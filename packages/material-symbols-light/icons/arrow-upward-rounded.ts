import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowUpwardRoundedIcon],svg[material-symbols-light-arrow-upward-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 6.921L6.062 12.36q-.146.146-.345.153q-.198.006-.363-.16q-.16-.164-.163-.353q-.002-.188.163-.354l6.08-6.08q.132-.131.268-.184q.137-.053.298-.053t.298.053t.268.184l6.08 6.08q.14.14.15.342q.01.2-.15.366q-.165.165-.356.165q-.192 0-.357-.165L12.5 6.92V18.5q0 .214-.143.357T12 19t-.357-.143t-.143-.357z"></svg:path>`,
})
export class MaterialSymbolsLightArrowUpwardRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
