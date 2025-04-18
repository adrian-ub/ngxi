import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biModemFillIcon],svg[bi-modem-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 0a1.5 1.5 0 0 0-1.5 1.5v11a1.5 1.5 0 0 0 1.404 1.497c-.35.305-.872.678-1.628 1.056A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .224-.947c-.756-.378-1.278-.75-1.628-1.056A1.5 1.5 0 0 0 10.5 12.5v-11A1.5 1.5 0 0 0 9 0zm1 3a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m0 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m.5 1.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0M8 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path>`,
})
export class BiModemFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
