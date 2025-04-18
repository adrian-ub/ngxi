import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumPassport1Icon],svg[circum-passport-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 21.936h-9a2.5 2.5 0 0 1-2.5-2.5V4.564a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v14.872a2.5 2.5 0 0 1-2.5 2.5m-9-18.872a1.5 1.5 0 0 0-1.5 1.5v14.872a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V4.564a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path><svg:path fill="currentColor" d="M12 12.563a3.5 3.5 0 1 1 3.5-3.5a3.5 3.5 0 0 1-3.5 3.5m0-6a2.5 2.5 0 1 0 2.5 2.5a2.5 2.5 0 0 0-2.5-2.5m3 11.875H9a.5.5 0 0 1 0-1h6a.5.5 0 1 1 0 1"></svg:path>`,
})
export class CircumPassport1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
