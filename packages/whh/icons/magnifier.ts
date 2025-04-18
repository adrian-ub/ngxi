import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMagnifierIcon],svg[whh-magnifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1005 1004q-19 19-45.5 19t-45.5-19L716 806q-120 89-268 89q-91 0-174-35.5T131 764T35.5 621.5T0 447.5T35.5 273T131 130.5t143-95T448 0t174 35.5t143 95T860.5 273T896 447q0 149-89 268l198 198q19 19 19 45.5t-19 45.5M448 128q-87 0-160.5 42.5T171 287t-43 160.5T171 608t116.5 116.5T448 767t160.5-42.5T725 608t43-160.5T725 287T608.5 170.5T448 128"></svg:path>`,
})
export class WhhMagnifierIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
