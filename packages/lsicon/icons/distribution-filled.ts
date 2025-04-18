import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDistributionFilledIcon],svg[lsicon-distribution-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 2h7v2h3.25L15 6.333V12.5h-1.063a2 2 0 0 1-3.874 0H5.437a2 2 0 1 1 0-1h4.626a2 2 0 0 1 3.874 0H14V7H9V3H3zm3.5 4H2V5h4.5zm-1 3H1V8h4.5zm-2 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2m8.5 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDistributionFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
