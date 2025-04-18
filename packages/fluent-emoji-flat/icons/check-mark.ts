import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatCheckMarkIcon],svg[fluent-emoji-flat-check-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#785DC8" fill-rule="evenodd" d="M28.928 10.3a3.25 3.25 0 0 1-.137 4.595L13.94 28.89a3.25 3.25 0 0 1-4.557-.098l-6.264-6.435a3.25 3.25 0 0 1 4.658-4.534l4.033 4.143l12.525-11.802a3.25 3.25 0 0 1 4.594.136" clip-rule="evenodd"></svg:path>`,
})
export class FluentEmojiFlatCheckMarkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
