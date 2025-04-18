import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSignInFillIcon],svg[ph-sign-in-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m141.66 133.66l-40 40A8 8 0 0 1 88 168v-32H24a8 8 0 0 1 0-16h64V88a8 8 0 0 1 13.66-5.66l40 40a8 8 0 0 1 0 11.32M200 32h-64a8 8 0 0 0 0 16h56v160h-56a8 8 0 0 0 0 16h64a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhSignInFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
