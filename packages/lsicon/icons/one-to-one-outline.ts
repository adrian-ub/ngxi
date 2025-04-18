import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOneToOneOutlineIcon],svg[lsicon-one-to-one-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M4 3.5H1.5V6M4 12.5H1.5V10M12 3.5h2.5V6M12 12.5h2.5V10M8 9v1m0-4v1m-3.5-.5l1.5-1V11m3.5-4.5l1.5-1V11"></svg:path>`,
})
export class LsiconOneToOneOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
