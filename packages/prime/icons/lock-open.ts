import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeLockOpenIcon],svg[prime-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3.25A4.75 4.75 0 0 0 11.25 8v2.25H6A2.75 2.75 0 0 0 3.25 13v5A2.75 2.75 0 0 0 6 20.75h7A2.75 2.75 0 0 0 15.75 18v-5A2.75 2.75 0 0 0 13 10.25h-.25V8a3.25 3.25 0 0 1 6.5 0a.75.75 0 0 0 1.5 0A4.75 4.75 0 0 0 16 3.25M14.25 13v5A1.25 1.25 0 0 1 13 19.25H6A1.25 1.25 0 0 1 4.75 18v-5A1.25 1.25 0 0 1 6 11.75h7A1.25 1.25 0 0 1 14.25 13"></svg:path>`,
})
export class PrimeLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
