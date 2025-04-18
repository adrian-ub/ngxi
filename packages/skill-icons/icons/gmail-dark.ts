import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[skillIconsGmailDarkIcon],svg[skill-icons-gmail-dark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="256" height="256" fill="#242938" rx="60"></svg:rect><svg:path fill="#4285F4" d="M41.636 203.028h31.818v-77.273L28 91.665v97.727c0 7.545 6.114 13.636 13.636 13.636"></svg:path><svg:path fill="#34A853" d="M182.545 203.028h31.819c7.545 0 13.636-6.113 13.636-13.636V91.665l-45.455 34.09"></svg:path><svg:path fill="#FBBC04" d="M182.545 66.664v59.091L228 91.665V73.481c0-16.863-19.25-26.477-32.727-16.363"></svg:path><svg:path fill="#EA4335" d="M73.455 125.755v-59.09L128 107.574l54.545-40.91v59.091L128 166.665"></svg:path><svg:path fill="#C5221F" d="M28 73.483v18.181l45.454 34.091v-59.09l-12.727-9.546C47.227 47.005 28 56.619 28 73.483"></svg:path></svg:g>`,
})
export class SkillIconsGmailDarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
