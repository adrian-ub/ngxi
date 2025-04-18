import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riOperaLineIcon],svg[ri-opera-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.767 19.51a8.003 8.003 0 0 0 0-15.02C16.712 5.977 18 8.935 18 12s-1.289 6.024-3.235 7.51M9.235 4.49a8.003 8.003 0 0 0 0 15.02C7.29 18.023 6.001 15.065 6.001 12S7.29 5.976 9.235 4.49M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-3.5c2 0 4-3.033 4-6.5s-2-6.5-4-6.5s-4 3.033-4 6.5s2 6.5 4 6.5"></svg:path>`,
})
export class RiOperaLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
