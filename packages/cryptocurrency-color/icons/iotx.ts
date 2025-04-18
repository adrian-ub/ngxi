import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorIotxIcon],svg[cryptocurrency-color-iotx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#00D4D5"></svg:circle><svg:g fill="#FFF"><svg:path d="M16.519 5v5.457l4.738-2.725z"></svg:path><svg:path d="M21.257 7.732v5.457l4.737-2.732z" opacity=".9"></svg:path><svg:path d="M16.519 10.457v5.457l4.738-2.725zm4.738 2.733v5.456l4.737-2.732z" opacity=".8"></svg:path><svg:path d="M16.519 15.914v5.457l4.738-2.725z" opacity=".8"></svg:path><svg:path d="M21.257 18.646v5.457l4.737-2.732z"></svg:path><svg:path d="M4.273 10.273v5.457l4.738-2.732z" opacity=".4"></svg:path><svg:path d="M10.25 12.302v5.457l4.73-2.725z" opacity=".2"></svg:path><svg:path d="M6.738 15.753v5.457l4.737-2.732z" opacity=".3"></svg:path><svg:path d="M9.86 19.871v5.457l4.73-2.732z" opacity=".9"></svg:path><svg:path d="M16.48 22.22v5.458l4.73-2.733z" opacity=".7"></svg:path><svg:path d="M11.039 9.607v5.458l4.73-2.725z" opacity=".9"></svg:path><svg:path d="M16.519 5v5.457l-4.738-2.725z" opacity=".8"></svg:path><svg:path d="M11.039 7.32v5.456L6.3 10.044z" opacity=".6"></svg:path><svg:path d="M15.777 10.02v5.458l-4.738-2.733z" opacity=".6"></svg:path><svg:path d="M10.228 12.302v5.457L5.49 15.034z" opacity=".95"></svg:path><svg:path d="M16.519 15.914v5.457l-4.73-2.725z" opacity=".6"></svg:path><svg:path d="M6.738 17.185v5.457L2 19.909z" opacity=".55"></svg:path><svg:path d="M25.994 10.457v5.457l-4.737-2.725z"></svg:path><svg:path d="M21.257 13.19v5.456l-4.738-2.732z" opacity=".95"></svg:path><svg:path d="M25.994 15.914v5.457l-4.737-2.725z" opacity=".9"></svg:path><svg:path d="M21.257 18.646v5.457l-4.738-2.732z" opacity=".7"></svg:path><svg:path d="M15.47 20.92v5.457l-4.737-2.725z" opacity=".4"></svg:path><svg:path d="M21.257 7.732v5.457l-4.738-2.732z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorIotxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
