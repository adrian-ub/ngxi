import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTumblrLogoFillIcon],svg[ph-tumblr-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 120v48a8 8 0 0 0 8 8h32a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8h-40a64.07 64.07 0 0 1-64-64v-56H64a8 8 0 0 1-8-8V72a8 8 0 0 1 8-8a40 40 0 0 0 40-40a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v40h40a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8Z"></svg:path>`,
})
export class PhTumblrLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
