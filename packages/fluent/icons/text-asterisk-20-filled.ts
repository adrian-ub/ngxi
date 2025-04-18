import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextAsterisk20FilledIcon],svg[fluent-text-asterisk-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.6 2.5a.6.6 0 1 0-1.2 0v6.052l-4.279-4.28a.6.6 0 1 0-.848.85L8.552 9.4H2.5a.6.6 0 1 0 0 1.2h6.052l-4.279 4.28a.6.6 0 0 0 .849.848L9.4 11.449V17.5a.6.6 0 1 0 1.2 0v-6.05l4.28 4.279a.6.6 0 0 0 .848-.849l-4.279-4.28H17.5a.6.6 0 1 0 0-1.2h-6.05l4.278-4.279a.6.6 0 0 0-.848-.848L10.6 8.552z"></svg:path>`,
})
export class FluentTextAsterisk20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
