import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserSafetyFilledIcon],svg[tdesign-user-safety-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0m8.5 6h9v5.634a3 3 0 0 1-1.36 2.511L19 23.697l-3.14-2.052a3 3 0 0 1-1.36-2.511zm-2 8.5H2v-2a6 6 0 0 1 6-6h4.5z"></svg:path>`,
})
export class TdesignUserSafetyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
