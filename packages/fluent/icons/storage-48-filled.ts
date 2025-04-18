import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStorage48FilledIcon],svg[fluent-storage-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 14A6.25 6.25 0 0 0 4 20.25v7.5A6.25 6.25 0 0 0 10.25 34h27.5A6.25 6.25 0 0 0 44 27.75v-7.5A6.25 6.25 0 0 0 37.75 14zM32 21a2 2 0 1 1-4 0a2 2 0 0 1 4 0m5 2a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class FluentStorage48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
