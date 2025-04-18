import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyEmc2Icon],svg[cryptocurrency-emc2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16M6 22.998h13.095l1.893-3.839H7.894L6 23zm2.51-5.09h13.096l1.888-3.828H10.4l-1.888 3.828zm2.507-5.08H24.11L26 9H12.905l-1.888 3.829z"></svg:path><svg:path fill="currentColor" fill-opacity=".4" d="M7.894 19.16h8.781l-1.894 3.838H6zm.617-1.252L10.4 14.08h8.78l-1.888 3.828zm2.506-5.08L12.905 9h8.781l-1.889 3.829h-8.78z"></svg:path><svg:path fill="currentColor" fill-opacity=".4" d="M7.894 19.161h4.397L10.398 23H6zm2.505-5.08h4.398L12.91 17.91h-4.4l1.89-3.83zm2.506-5.08h4.398l-1.889 3.83h-4.397z"></svg:path>`,
})
export class CryptocurrencyEmc2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
