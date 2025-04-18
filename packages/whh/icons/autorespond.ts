import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAutorespondIcon],svg[whh-autorespond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M855.048 768h-87l-256 256V768h-343q-57 0-113-57t-56-115V172q0-58 56-115t113-57h686q57 0 113 57t56 115v424q0 58-56 115t-113 57m-343-640q-92 0-164 60l-60-60q-13 0-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5l-54-54q52-42 118-42q80 0 136 56.5t56 136t-56.5 135.5t-135.5 56q-55 0-101-29t-70-77l-58 28q32 64 93.5 103t135.5 39q106 0 181-75t75-181t-75-181t-181-75"></svg:path>`,
})
export class WhhAutorespondIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
