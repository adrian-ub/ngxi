import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGbSct1x1Icon],svg[flag-gb-sct-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0065bd" d="M0 0h512v512H0z"></svg:path><svg:path stroke="#fff" stroke-width=".6" d="m0 0l5 3M0 3l5-3" transform="scale(102.4 170.66667)"></svg:path>`,
})
export class FlagGbSct1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
