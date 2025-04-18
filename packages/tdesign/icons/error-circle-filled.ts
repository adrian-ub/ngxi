import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignErrorCircleFilledIcon],svg[tdesign-error-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1m-1 13h2V6.5h-2zm2.004 1.5H11v2.004h2.004z"></svg:path>`,
})
export class TdesignErrorCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
