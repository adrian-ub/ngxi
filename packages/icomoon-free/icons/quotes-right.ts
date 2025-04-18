import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeQuotesRightIcon],svg[icomoon-free-quotes-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 10A3.5 3.5 0 1 1 16 6.5l.016.5a7 7 0 0 1-7 7v-2a4.97 4.97 0 0 0 3.536-1.464a5 5 0 0 0 .497-.578a3.6 3.6 0 0 1-.549.043zm-9 0A3.5 3.5 0 1 1 7 6.5l.016.5a7 7 0 0 1-7 7v-2a4.97 4.97 0 0 0 3.536-1.464a5 5 0 0 0 .497-.578a3.6 3.6 0 0 1-.549.043z"></svg:path>`,
})
export class IcomoonFreeQuotesRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
