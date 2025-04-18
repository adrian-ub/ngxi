import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextT48FilledIcon],svg[fluent-text-t-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9.5A1.5 1.5 0 0 1 11.5 8h25A1.5 1.5 0 0 1 38 9.5v4a1.5 1.5 0 0 1-3 0V11h-9.5v26h3a1.5 1.5 0 0 1 0 3h-9a1.5 1.5 0 0 1 0-3h3V11H13v2.5a1.5 1.5 0 0 1-3 0z"></svg:path>`,
})
export class FluentTextT48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
