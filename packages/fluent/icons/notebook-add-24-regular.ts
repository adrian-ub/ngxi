import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNotebookAdd24RegularIcon],svg[fluent-notebook-add-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.749 2a2.25 2.25 0 0 1 2.25 2.25v15.5a2.25 2.25 0 0 1-2.25 2.25H11.19a6.5 6.5 0 0 0 1.078-1.5h4.48a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75H6.25a.75.75 0 0 0-.75.75v6.826a6.5 6.5 0 0 0-1.5.422V4.25A2.25 2.25 0 0 1 6.25 2zM20 15.002h.75a.75.75 0 0 1 .743.648l.007.102v1.498a.75.75 0 0 1-.648.743L20.75 18H20zm0-4h.75a.75.75 0 0 1 .743.648l.007.102v1.498a.75.75 0 0 1-.648.743L20.75 14H20zm0-4h.75a.75.75 0 0 1 .743.648l.007.102V9.25a.75.75 0 0 1-.648.743L20.75 10H20z"></svg:path><svg:path d="M15.249 5a.75.75 0 0 1 .75.75v2.499a.75.75 0 0 1-.75.75H7.75a.75.75 0 0 1-.75-.75V5.75A.75.75 0 0 1 7.75 5zm-.75 1.5H8.5v.999h5.999zM12 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0M7 18l.001 2.503a.5.5 0 1 1-1 0V18H3.496a.5.5 0 0 1 0-1H6v-2.5a.5.5 0 1 1 1 0V17h2.497a.5.5 0 0 1 0 1z"></svg:path></svg:g>`,
})
export class FluentNotebookAdd24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
