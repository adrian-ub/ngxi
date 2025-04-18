import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGifIcon],svg[ph-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 72v112a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0m88-8h-56a8 8 0 0 0-8 8v112a8 8 0 0 0 16 0v-48h40a8 8 0 0 0 0-16h-40V80h48a8 8 0 0 0 0-16M96 120H72a8 8 0 0 0 0 16h16v16a24 24 0 0 1-48 0v-48a24 24 0 0 1 24-24c11.19 0 21.61 7.74 24.25 18a8 8 0 0 0 15.5-4C99.27 76.62 82.56 64 64 64a40 40 0 0 0-40 40v48a40 40 0 0 0 80 0v-24a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhGifIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
