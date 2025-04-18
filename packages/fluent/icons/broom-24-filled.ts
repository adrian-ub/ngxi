import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBroom24FilledIcon],svg[fluent-broom-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.453 1.923a.75.75 0 0 1 0 1.06L16.14 9.296a6.8 6.8 0 0 0-1.068-1.053l6.32-6.32a.75.75 0 0 1 1.061 0M15.03 9.347a5.75 5.75 0 0 0-8.132 0l-.244.244l8.132 8.132l.244-.244a5.75 5.75 0 0 0 0-8.132M1.885 12.966l3.613-2.409l8.32 8.321l-2.408 3.613a.75.75 0 0 1-1.154.115L1.77 14.12a.75.75 0 0 1 .115-1.154"></svg:path>`,
})
export class FluentBroom24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
