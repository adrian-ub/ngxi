import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feFastBackwardIcon],svg[fe-fast-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 12c0-.107.023-.216.072-.316a.6.6 0 0 1 .221-.253l6.86-4.35c.276-.174.623-.06.775.254a.7.7 0 0 1 .072.316V12c0-.106.023-.215.072-.315a.6.6 0 0 1 .221-.253l6.86-4.35c.276-.174.623-.06.775.254a.7.7 0 0 1 .072.316v8.698c0 .36-.255.651-.57.651a.5.5 0 0 1-.277-.082l-6.86-4.349A.67.67 0 0 1 13 12v4.35c0 .36-.255.651-.57.651a.5.5 0 0 1-.277-.082l-6.86-4.349A.67.67 0 0 1 5 12v4c0 .552-.5 1-1 1s-1-.448-1-1V8a1 1 0 1 1 2 0z"></svg:path>`,
})
export class FeFastBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
