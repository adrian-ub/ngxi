import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPlayCircle48FilledIcon],svg[fluent-play-circle-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m9.766-21.287a1.5 1.5 0 0 1 0 2.575l-12.362 7.387c-1.5.897-3.404-.184-3.404-1.93V17.256c0-1.747 1.904-2.828 3.404-1.932z"></svg:path>`,
})
export class FluentPlayCircle48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
