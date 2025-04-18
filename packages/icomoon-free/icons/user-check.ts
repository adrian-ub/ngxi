import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeUserCheckIcon],svg[icomoon-free-user-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9.5L10.5 14L9 12.5l-1 1l2.5 2.5l5.5-5.5z"></svg:path><svg:path fill="currentColor" d="M7 12h5v-1.799c-1.05-.613-2.442-1.033-4-1.16v-.825c1.102-.621 2-2.168 2-3.716C10 2.015 10 0 7 0S4 2.015 4 4.5c0 1.548.898 3.095 2 3.716v.825C2.608 9.318 0 10.985 0 13h7z"></svg:path>`,
})
export class IcomoonFreeUserCheckIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
