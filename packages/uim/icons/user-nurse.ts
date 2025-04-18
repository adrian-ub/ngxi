import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimUserNurseIcon],svg[uim-user-nurse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.94 22H3.06a1 1 0 0 1-.994-1.108a9.995 9.995 0 0 1 19.868 0A1 1 0 0 1 20.94 22" opacity=".5"></svg:path><svg:path fill="currentColor" d="m12.708 18.307l4.706-4.715a10 10 0 0 0-10.833.003l4.712 4.712A1 1 0 0 0 12 18.6a1 1 0 0 0 .708-.293" opacity=".25"></svg:path><svg:path fill="currentColor" d="M11.995 14a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6" opacity=".25"></svg:path><svg:path fill="currentColor" d="M6.09 9a5.993 5.993 0 0 0 11.82 0Z"></svg:path>`,
})
export class UimUserNurseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
