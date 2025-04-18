import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPieTwoOutlineIcon],svg[lsicon-pie-two-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.999 13.125a6.5 6.5 0 0 0 10.419-4.122h-7.42m-3 4.122a6.498 6.498 0 0 1 3-11.542v7.42M4 13.125l2.998-4.122M9 7V1.5A5.5 5.5 0 0 1 14.5 7z"></svg:path>`,
})
export class LsiconPieTwoOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
