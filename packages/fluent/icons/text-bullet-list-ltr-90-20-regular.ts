import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextBulletListLtr9020RegularIcon],svg[fluent-text-bullet-list-ltr-90-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 3a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5m-5 0a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5M6 6.5a.5.5 0 0 0-1 0v11a.5.5 0 0 0 1 0zM5.5 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m4-1a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class FluentTextBulletListLtr9020RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
