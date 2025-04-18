import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeCheckmark2Icon],svg[icomoon-free-checkmark2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.21 14.339L-.007 8.22l3.084-3.035L6.21 8.268l6.713-6.607l3.084 3.035zM1.686 8.22l4.524 4.453l8.104-7.976l-1.391-1.369L6.21 9.935L3.077 6.852z"></svg:path>`,
})
export class IcomoonFreeCheckmark2Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
