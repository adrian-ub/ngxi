import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudArrowDown48FilledIcon],svg[fluent-cloud-arrow-down-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 6c-6.29 0-11.45 4.84-11.959 11H11.5a8.5 8.5 0 0 0 0 17H21c0-7.18 5.82-13 13-13c4.556 0 8.565 2.344 10.887 5.892q.112-.68.113-1.392a8.5 8.5 0 0 0-8.5-8.5h-.541C35.45 10.84 30.29 6 24 6m21 28c0 6.075-4.925 11-11 11s-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11m-11-8a1 1 0 0 0-1 1v11.586l-3.293-3.293a1 1 0 0 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0-1.414-1.414L35 38.586V27a1 1 0 0 0-1-1"></svg:path>`,
})
export class FluentCloudArrowDown48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
