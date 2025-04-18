import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoForwardIcon],svg[entypo-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.874v4.357l7-6.69l-7-6.572v3.983c-8.775 0-11 9.732-11 9.732c2.484-4.388 6.237-4.81 11-4.81"></svg:path>`,
})
export class EntypoForwardIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
