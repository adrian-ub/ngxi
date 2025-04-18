import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUserPlusBoldIcon],svg[ph-user-plus-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 136a12 12 0 0 1-12 12h-8v8a12 12 0 0 1-24 0v-8h-8a12 12 0 0 1 0-24h8v-8a12 12 0 0 1 24 0v8h8a12 12 0 0 1 12 12m-54.81 56.28a12 12 0 1 1-18.38 15.44C169.12 191.42 145 172 108 172c-28.89 0-55.46 12.68-74.81 35.72a12 12 0 0 1-18.38-15.44a124.1 124.1 0 0 1 48.69-35.75a72 72 0 1 1 89 0a124 124 0 0 1 48.69 35.75M108 148a48 48 0 1 0-48-48a48.05 48.05 0 0 0 48 48"></svg:path>`,
})
export class PhUserPlusBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
