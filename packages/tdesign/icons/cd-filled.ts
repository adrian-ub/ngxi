import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCdFilledIcon],svg[tdesign-cd-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12m14.5 0a3.5 3.5 0 1 0-7 0a3.5 3.5 0 0 0 7 0M12 4.5h-.5v1h.5a6.5 6.5 0 0 1 6.5 6.5v.5h1V12A7.5 7.5 0 0 0 12 4.5"></svg:path>`,
})
export class TdesignCdFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
