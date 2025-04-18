import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorHistory32Icon],svg[fluent-color-history-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorHistory320)" d="M15.75 8c.69 0 1.25.56 1.25 1.25V15h3.75a1.25 1.25 0 1 1 0 2.5h-5c-.69 0-1.25-.56-1.25-1.25v-7c0-.69.56-1.25 1.25-1.25"></svg:path><svg:path fill="url(#fluentColorHistory321)" d="M16 5.5c5.799 0 10.5 4.701 10.5 10.5S21.799 26.5 16 26.5S5.5 21.799 5.5 16q0-.34.021-.674a1.25 1.25 0 0 0-2.495-.157Q3 15.582 3 16c0 7.18 5.82 13 13 13s13-5.82 13-13S23.18 3 16 3c-3.25 0-6.222 1.193-8.5 3.164V4.25a1.25 1.25 0 1 0-2.5 0v5c0 .69.56 1.25 1.25 1.25h5a1.25 1.25 0 1 0 0-2.5H9.199A10.46 10.46 0 0 1 16 5.5"></svg:path><svg:defs><svg:lineargradient id="fluentColorHistory320" x1="13.234" x2="31.423" y1="26.13" y2="18.86" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D373FC"></svg:stop><svg:stop offset="1" stop-color="#6D37CD"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHistory321" x1="3" x2="9.979" y1="4.529" y2="33.75" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorHistory32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
