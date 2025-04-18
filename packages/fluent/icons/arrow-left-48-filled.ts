import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowLeft48FilledIcon],svg[fluent-arrow-left-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44.25 24a1.5 1.5 0 0 1-1.5 1.5H10.915l12.387 12.18a1.5 1.5 0 1 1-2.104 2.14L6.201 25.072l-.02-.02a1.5 1.5 0 0 1 .042-2.145L21.198 8.18a1.5 1.5 0 1 1 2.104 2.14L10.915 22.5H42.75a1.5 1.5 0 0 1 1.5 1.5"></svg:path>`,
})
export class FluentArrowLeft48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
