import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1DigitOneIcon],svg[noto-v1-digit-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="m47.33 46.63l7.51-2.15V85.7h-5.79c-.62 0-1.11.5-1.11 1.11v14.09c0 .62.49 1.11 1.11 1.11h29.93c.61 0 1.1-.49 1.1-1.11V86.8c0-.61-.49-1.11-1.1-1.11h-5.79V25.35c0-.34-.16-.66-.42-.86c-.26-.21-.6-.3-.93-.22l-25.05 5.38c-.5.11-.87.56-.87 1.08v14.84c0 .35.16.68.44.89c.28.2.64.27.97.17"></svg:path>`,
})
export class NotoV1DigitOneIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
