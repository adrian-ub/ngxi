import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiCeilingMuscariIcon],svg[cbi-ceiling-muscari-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.63 12.11c0-1.61-1.89-3.04-4.79-3.92c-.52-1.61-3.28-2.77-6.84-2.77S5.68 6.58 5.16 8.19C2.26 9.07.37 10.5.37 12.11h.01c0 .03-.01.06-.01.1c0 2.48 5.21 4.48 11.63 4.48s11.63-2.01 11.63-4.48c0-.03-.01-.06-.01-.1zM12 6.42c2.51 0 4.46.63 5.37 1.39c-1.61-.35-3.43-.55-5.37-.55s-3.76.2-5.37.55c.91-.76 2.86-1.39 5.37-1.39m.27 9.44c-4.98 0-9.01-1.64-9.01-3.65c0-2.02 4.04-3.65 9.01-3.65s9.01 1.64 9.01 3.65s-4.03 3.65-9.01 3.65"></svg:path>`,
})
export class CbiCeilingMuscariIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
