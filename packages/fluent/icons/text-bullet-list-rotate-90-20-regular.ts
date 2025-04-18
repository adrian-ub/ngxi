import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextBulletListRotate9020RegularIcon],svg[fluent-text-bullet-list-rotate-90-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM10 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm6.5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM5 5.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12Zm5-.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-1 0v-12A.5.5 0 0 1 10 5Zm6 .5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12Z"></svg:path>`,
})
export class FluentTextBulletListRotate9020RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
