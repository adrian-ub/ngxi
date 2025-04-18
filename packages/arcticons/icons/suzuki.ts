import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSuzukiIcon],svg[arcticons-suzuki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.88 14.827s2.228 1.697 8.342 5.588s14.936-2.052 14.936-2.052L24.055 5.5C16.115 13.916 5.95 16.934 5.95 16.934l23.17 16.24s-2.23-1.698-8.343-5.59c-6.114-3.89-14.936 2.053-14.936 2.053L23.945 42.5c7.94-8.417 18.104-11.434 18.104-11.434z"></svg:path>`,
})
export class ArcticonsSuzukiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
