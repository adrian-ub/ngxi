import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faGitlabIcon],svg[fa-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m104 642l792 1015l-868-630q-18-13-25-34.5T3 950zm462 0h660L896 1657zM368 30l198 612H104L302 30q8-23 33-23t33 23m1320 612l101 308q7 21 0 42.5t-25 34.5l-868 630zm0 0h-462l198-612q8-23 33-23t33 23z"></svg:path>`,
})
export class FaGitlabIcon {
  readonly viewBox = input("0 0 1792 1664")
  readonly width = input("1.08em")
  readonly height = input("1em")
}
