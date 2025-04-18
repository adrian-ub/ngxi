import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconBackSquareOutlineIcon],svg[lsicon-back-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M8.5 7.5c4 0 2 4 0 4h-3v-4m3 0h-3m3 0c1 0 2.893-3 0-3h-3v3m-3 6h11v-11h-11z"></svg:path>`,
})
export class LsiconBackSquareOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
