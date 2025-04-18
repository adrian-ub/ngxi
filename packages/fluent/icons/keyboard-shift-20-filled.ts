import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentKeyboardShift20FilledIcon],svg[fluent-keyboard-shift-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.139 2.528a1.492 1.492 0 0 0-2.278 0l-6.62 7.803c-.553.651-.093 1.654.759 1.654h3.01v5.012A1 1 0 0 0 7.006 18h5.986a1 1 0 0 0 .998-1.003v-5.012H17c.85 0 1.31-1.003.759-1.654z"></svg:path>`,
})
export class FluentKeyboardShift20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
