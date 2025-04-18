import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideMultiple24FilledIcon],svg[fluent-slide-multiple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7.75A4.75 4.75 0 0 1 6.75 3h10A2.25 2.25 0 0 1 19 5.25v.25H7.75A3.25 3.25 0 0 0 4.5 8.75V17h-.25A2.25 2.25 0 0 1 2 14.75zM7.75 6.5A2.25 2.25 0 0 0 5.5 8.75v9.5a2.25 2.25 0 0 0 2.25 2.25h12A2.25 2.25 0 0 0 22 18.25v-9.5a2.25 2.25 0 0 0-2.25-2.25z"></svg:path>`,
})
export class FluentSlideMultiple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
