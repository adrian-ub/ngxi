import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBankIcon],svg[streamline-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.91 5.5H1.09c-.56 0-.8-.61-.36-.9L6.64.73a.71.71 0 0 1 .72 0l5.91 3.87c.44.29.2.9-.36.9M13 11H1a.5.5 0 0 0-.5.5V13a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-1.5a.5.5 0 0 0-.5-.5M2 5.5V11m3.333-5.5V11m3.334-5.5V11M12 5.5V11"></svg:path>`,
})
export class StreamlineBankIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
