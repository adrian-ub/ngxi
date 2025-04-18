import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDeleteKeyboardSolidIcon],svg[streamline-delete-keyboard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.316 10.463a2 2 0 0 0 1.523.703h6.182a2 2 0 0 0 2-2V4.834a2 2 0 0 0-2-2H4.839a2 2 0 0 0-1.523.703L1.471 5.703a2 2 0 0 0 0 2.594zm2.165-5.718a.625.625 0 0 1 .884 0l1.35 1.35l1.349-1.35a.625.625 0 1 1 .884.884l-1.35 1.35l1.35 1.35a.625.625 0 1 1-.884.884l-1.35-1.35l-1.35 1.35a.625.625 0 0 1-.883-.884l1.35-1.35l-1.35-1.35a.625.625 0 0 1 0-.884" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDeleteKeyboardSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
