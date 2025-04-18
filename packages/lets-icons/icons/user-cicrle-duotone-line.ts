import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsUserCicrleDuotoneLineIcon],svg[lets-icons-user-cicrle-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="10" r="3" fill="currentColor"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.2"></svg:circle><svg:path fill="currentColor" fill-opacity=".25" stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M17.872 18.808a.23.23 0 0 0 .073-.257c-.376-1-1.132-1.88-2.164-2.518C14.697 15.363 13.367 15 12 15s-2.697.363-3.781 1.033c-1.032.638-1.788 1.519-2.164 2.518a.23.23 0 0 0 .073.257a9.41 9.41 0 0 0 11.744 0Z"></svg:path></svg:g>`,
})
export class LetsIconsUserCicrleDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
