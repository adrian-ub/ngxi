import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSubttasksLightIcon],svg[lets-icons-subttasks-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="4" height="4" x="18" y="9" rx="2" transform="rotate(90 18 9)"></svg:rect><svg:rect width="4" height="4" x="18" y="17" rx="2" transform="rotate(90 18 17)"></svg:rect><svg:rect width="4" height="4" x="3" y="7" rx="2" transform="rotate(-90 3 7)"></svg:rect><svg:path d="M5 8v7c0 1.886 0 2.828.586 3.414S7.114 19 9 19h5"></svg:path><svg:path d="M5 7c0 1.886 0 2.828.586 3.414S7.114 11 9 11h5"></svg:path></svg:g>`,
})
export class LetsIconsSubttasksLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
