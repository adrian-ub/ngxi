import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundTextFormatIcon],svg[ic-round-text-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1m4.5-5.2h5l.66 1.6c.15.36.5.6.89.6c.69 0 1.15-.71.88-1.34l-3.88-8.97C12.87 4.27 12.46 4 12 4s-.87.27-1.05.69l-3.88 8.97c-.27.63.2 1.34.89 1.34c.39 0 .74-.24.89-.6zM12 5.98L13.87 11h-3.74z"></svg:path>`,
})
export class IcRoundTextFormatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
