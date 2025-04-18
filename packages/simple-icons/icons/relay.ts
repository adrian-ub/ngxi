import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsRelayIcon],svg[simple-icons-relay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.264 4.937A2.264 2.264 0 1 0 4.456 7.77h10.339a1.792 1.792 0 0 1 0 3.583h-5.73a3.037 3.037 0 0 0-3.034 3.033a3.036 3.036 0 0 0 3.033 3.033h10.494a2.264 2.264 0 1 0 0-1.242H9.064a1.793 1.793 0 0 1-1.791-1.791c0-.988.803-1.792 1.791-1.792h5.73a3.036 3.036 0 0 0 3.034-3.033a3.036 3.036 0 0 0-3.033-3.033H4.427a2.265 2.265 0 0 0-2.163-1.592"></svg:path>`,
})
export class SimpleIconsRelayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
