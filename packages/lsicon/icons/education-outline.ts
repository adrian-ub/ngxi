import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconEducationOutlineIcon],svg[lsicon-education-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12.5 6v5.5s-2.926 1-4.5 1s-4.5-1-4.5-1V6M14 5L8 2.5L2 5l6 3zm0 0v4.5"></svg:path>`,
})
export class LsiconEducationOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
