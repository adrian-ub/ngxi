import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionRotate90Ltr20FilledIcon],svg[fluent-text-direction-rotate-90-ltr-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6.5a.75.75 0 0 0-.471-.696l-7.5-3a.75.75 0 0 0-.557 1.392l2.028.812v2.984l-2.028.812a.75.75 0 1 0 .557 1.392l7.5-3A.75.75 0 0 0 17 6.5m-2.77 0L12 7.392V5.608zM5 3.75a.75.75 0 0 1 1.5 0v10.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72zm8 7a.75.75 0 0 1 1.5 0v3.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 0 1 1.06-1.06l.72.72z"></svg:path>`,
})
export class FluentTextDirectionRotate90Ltr20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
