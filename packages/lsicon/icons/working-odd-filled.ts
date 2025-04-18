import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconWorkingOddFilledIcon],svg[lsicon-working-odd-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 1.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5V7h-1V2H4v12h3v1H3.5a.5.5 0 0 1-.5-.5zM11 5H5V4h6zM9 7H5V6h4zm-2 4.5A3.5 3.5 0 0 1 10.5 8a.5.5 0 0 1 .5.5V11h2.5a.5.5 0 0 1 .5.5a3.5 3.5 0 1 1-7 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconWorkingOddFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
