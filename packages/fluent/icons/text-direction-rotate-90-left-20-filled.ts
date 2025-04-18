import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionRotate90Left20FilledIcon],svg[fluent-text-direction-rotate-90-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 13.5a.75.75 0 0 1-.471.696l-7.5 3a.75.75 0 0 1-.557-1.393l2.028-.811v-2.984l-2.028-.812a.75.75 0 0 1 .557-1.393l7.5 3A.75.75 0 0 1 17 13.5m-2.77 0L12 12.608v1.784zM5 16.25a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 0 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06L5 5.56zm8-7a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2a.75.75 0 0 0 1.06 1.06l.72-.72z"></svg:path>`,
})
export class FluentTextDirectionRotate90Left20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
