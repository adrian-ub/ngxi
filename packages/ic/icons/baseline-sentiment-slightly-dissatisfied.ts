import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineSentimentSlightlyDissatisfiedIcon],svg[ic-baseline-sentiment-slightly-dissatisfied-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 16.5c-.73 0-1.39.19-1.98.52c-1-1.12-.04-.05-1.01-1.14c.86-.55 1.88-.88 2.99-.88a5.4 5.4 0 0 1 2.98.89c-.15.16-.89 1-1.01 1.14c-.58-.34-1.24-.53-1.97-.53m3.5-5.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-7 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class IcBaselineSentimentSlightlyDissatisfiedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
