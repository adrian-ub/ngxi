import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRowChild20FilledIcon],svg[fluent-row-child-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6v3a2 2 0 0 0 2 2h2v-1a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2H8a3 3 0 0 1-3-3V9a2 2 0 0 1-2-2z"></svg:path>`,
})
export class FluentRowChild20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
