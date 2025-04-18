import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhoneLaptop16FilledIcon],svg[fluent-phone-laptop-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4a1.5 1.5 0 0 1 1.5-1.5h8A1.5 1.5 0 0 1 14 4v5a1.5 1.5 0 0 1-1.5 1.5h-4v-4A2.5 2.5 0 0 0 6 4H3.5q-.26 0-.5.063zm11.5 8.5h-6v-1h6a.5.5 0 0 1 0 1M3 5a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 3 14h3a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 6 5zm1.5 7.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path>`,
})
export class FluentPhoneLaptop16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
