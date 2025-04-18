import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextBulletListRotate9020FilledIcon],svg[fluent-text-bullet-list-rotate-90-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM10 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm6.5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM5.25 5.75a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0V5.75ZM10 5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-1.5 0V5.75A.75.75 0 0 1 10 5Zm6.25.75a.75.75 0 0 0-1.5 0v11.5a.75.75 0 0 0 1.5 0V5.75Z"></svg:path>`,
})
export class FluentTextBulletListRotate9020FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
