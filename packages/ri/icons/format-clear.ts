import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFormatClearIcon],svg[ri-format-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.651 14.065L11.605 20H9.574l1.35-7.661l-7.41-7.41L4.93 3.515L20.485 19.07l-1.414 1.414zm-.878-6.535l.27-1.53h-1.8l-2-2H20v2h-5.927L13.5 9.257z"></svg:path>`,
})
export class RiFormatClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
