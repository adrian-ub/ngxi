import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCallMadeRoundedIcon],svg[material-symbols-light-call-made-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7.708L6.062 18.646q-.14.14-.345.15q-.203.01-.363-.15t-.16-.354t.16-.353L16.292 7H9.5q-.213 0-.356-.144T9 6.499t.144-.356T9.5 6h7.692q.344 0 .576.232t.232.576V14.5q0 .213-.144.356t-.357.144t-.356-.144T17 14.5z"></svg:path>`,
})
export class MaterialSymbolsLightCallMadeRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
