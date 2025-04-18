import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorEmc2Icon],svg[cryptocurrency-color-emc2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#0CF"></svg:circle><svg:g fill="#FFF"><svg:path fill-opacity=".4" d="M7.894 19.161h4.397L10.398 23H6zm2.505-5.08h4.398L12.91 17.91h-4.4l1.89-3.83zm2.506-5.08h4.398l-1.889 3.83h-4.397z"></svg:path><svg:path fill-opacity=".6" d="M12.277 19.16h4.398l-1.894 3.838h-4.398zm2.506-5.08h4.397l-1.888 3.828h-4.398zM17.288 9h4.398l-1.889 3.829H15.4z"></svg:path><svg:path d="M16.59 19.16h4.398l-1.893 3.838h-4.398zm2.506-5.08h4.398l-1.888 3.828h-4.398zM21.602 9H26l-1.889 3.829h-4.397z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorEmc2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
