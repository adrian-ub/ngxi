import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTv48FilledIcon],svg[fluent-tv-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12.75A4.75 4.75 0 0 1 8.75 8h30.5A4.75 4.75 0 0 1 44 12.75v18.5A4.75 4.75 0 0 1 39.25 36H8.75A4.75 4.75 0 0 1 4 31.25zm7.25 26.75a1.25 1.25 0 1 0 0 2.5h25.5a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentTv48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
