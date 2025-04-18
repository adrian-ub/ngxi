import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconArrowLeftOutlineIcon],svg[lsicon-arrow-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12.957 8h-10m3.25 3.5L2.707 8l3.5-3.5"></svg:path>`,
})
export class LsiconArrowLeftOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
