import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laGitlabIcon],svg[la-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.383 1.973l-4.305 11.48l-.242.652l-2.04 5.438L16 29.875l14.203-10.332l-2.039-5.438l-4.55-12.132l-3.731 11.48h-7.766zM8.25 8.027l1.766 5.426H6.215zm15.5 0l2.035 5.426h-3.8zM5.465 15.453h5.2l3.429 10.563l-9.89-7.196zm7.3 0h6.47L16 25.403zm8.57 0h5.196l1.266 3.367l-9.895 7.196z"></svg:path>`,
})
export class LaGitlabIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
