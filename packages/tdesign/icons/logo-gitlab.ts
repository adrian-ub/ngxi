import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoGitlabIcon],svg[tdesign-logo-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.78 1h1.936l2.5 7.333h5.568L17.284 1h1.937l4.454 13.362L12 23.257L.325 14.362zm.978 3.389l-3.083 9.249L12 20.743l9.325-7.105l-3.083-9.25l-2.026 5.945H7.784z"></svg:path>`,
})
export class TdesignLogoGitlabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
