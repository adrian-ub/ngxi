import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMailOpenLineIcon],svg[ri-mail-open-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.243 6.854L11.49 1.31a1 1 0 0 1 1.028 0l9.24 5.545a.5.5 0 0 1 .242.429V20a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.283a.5.5 0 0 1 .243-.429M4 8.133V19h16V8.132l-7.996-4.8zm8.06 5.565l5.296-4.463l1.288 1.53l-6.57 5.537l-6.71-5.53l1.272-1.544z"></svg:path>`,
})
export class RiMailOpenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
