import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMatchAppLayout20FilledIcon],svg[fluent-match-app-layout-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 7A1.5 1.5 0 0 0 2 8.5v3A1.5 1.5 0 0 0 3.5 13h4A1.5 1.5 0 0 0 9 11.5v-3A1.5 1.5 0 0 0 7.5 7zm9 0A1.5 1.5 0 0 0 11 8.5v3a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 16.5 7z"></svg:path>`,
})
export class FluentMatchAppLayout20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
