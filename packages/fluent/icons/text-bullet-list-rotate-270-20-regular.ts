import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextBulletListRotate27020RegularIcon],svg[fluent-text-bullet-list-rotate-270-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 16a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm5.5 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm6.5 1a1 1 0 1 0-2 0a1 1 0 0 0 2 0ZM5 14.5a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 1 0v12Zm5 .5a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-1 0v12a.5.5 0 0 0 .5.5Zm6-.5a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 1 0v12Z"></svg:path>`,
})
export class FluentTextBulletListRotate27020RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
