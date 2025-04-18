import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentKeyboardLayoutOneHandedLeft20RegularIcon],svg[fluent-keyboard-layout-one-handed-left-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 4A1.5 1.5 0 0 0 2 5.5v8A1.5 1.5 0 0 0 3.5 15h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 16.5 4zM3 5.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5zM5.5 12a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0-4.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M7.75 8a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M6 9.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m2.25.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></svg:path>`,
})
export class FluentKeyboardLayoutOneHandedLeft20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
