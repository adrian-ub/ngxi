import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsToggleLeftIcon],svg[bx-bxs-toggle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16 6H8c-3.296 0-5.982 2.682-6 5.986v.042A6.01 6.01 0 0 0 8 18h8a6.01 6.01 0 0 0 6-5.994v-.018C21.985 8.685 19.297 6 16 6zm-8 9c-1.627 0-3-1.373-3-3s1.373-3 3-3s3 1.373 3 3s-1.373 3-3 3z" fill="currentColor"></svg:path>`,
})
export class BxBxsToggleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
