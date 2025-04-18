import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciTrendingUpIcon],svg[ci-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 7l-5.846 5.938c-.105.106-.158.16-.205.202c-.76.68-1.907.68-2.667 0a5 5 0 0 1-.205-.203c-.105-.106-.158-.16-.205-.202a2 2 0 0 0-2.667 0a5 5 0 0 0-.204.202L4 17M20 7v6m0-6h-6"></svg:path>`,
})
export class CiTrendingUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
