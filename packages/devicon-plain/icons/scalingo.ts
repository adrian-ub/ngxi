import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainScalingoIcon],svg[devicon-plain-scalingo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M67.736 0c-5.52.015-10.918 2.862-13.832 7.867L25.211 57.141c-4.236 7.279-1.609 16.363 5.87 20.289c7.477 3.928 16.975 1.208 21.214-6.069l28.691-49.275c4.236-7.277 1.609-16.36-5.869-20.287A15.75 15.75 0 0 0 67.737 0zm21.805 48.772c-5.52.015-10.922 2.862-13.836 7.867l-28.691 49.273c-4.24 7.28-1.609 16.364 5.869 20.289c7.478 3.929 16.976 1.209 21.215-6.068l28.691-49.276c4.236-7.276 1.609-16.36-5.869-20.289a15.74 15.74 0 0 0-7.379-1.797z"></svg:path>`,
})
export class DeviconPlainScalingoIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
