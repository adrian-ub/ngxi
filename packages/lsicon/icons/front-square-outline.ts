import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFrontSquareOutlineIcon],svg[lsicon-front-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M10.5 4.5h-5v3m0 0V12m0-4.5h4m-7 6h11v-11h-11z"></svg:path>`,
})
export class LsiconFrontSquareOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
