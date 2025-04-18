import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsSpeechBubbleIcon],svg[system-uicons-speech-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 16.517c4.418 0 8-3.284 8-7.017S15.418 3 11 3S3 6.026 3 9.759c0 1.457.546 2.807 1.475 3.91L3.5 18.25l3.916-2.447a9.2 9.2 0 0 0 3.584.714"></svg:path>`,
})
export class SystemUiconsSpeechBubbleIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
