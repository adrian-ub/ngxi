import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailReadMultiple32RegularIcon],svg[fluent-mail-read-multiple-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.004 3.132a1 1 0 0 1 .992 0l9.492 5.424A3 3 0 0 1 26 11.16v8.34a4.5 4.5 0 0 1-4.5 4.5h-14A4.5 4.5 0 0 1 3 19.5v-8.34a3 3 0 0 1 1.512-2.604zM6.016 10l8.484 4.848L22.984 10L14.5 5.152zM24 11.723l-9.004 5.145a1 1 0 0 1-.992 0L5 11.723V19.5A2.5 2.5 0 0 0 7.5 22h14a2.5 2.5 0 0 0 2.5-2.5zM11.002 27.5a4.5 4.5 0 0 1-3.746-2.005q.122.005.245.005h15a5 5 0 0 0 5-5V10.276l.489.28a3 3 0 0 1 1.512 2.605v7.34a7 7 0 0 1-7 7z"></svg:path>`,
})
export class FluentMailReadMultiple32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
