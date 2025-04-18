import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biAwardFillIcon],svg[bi-award-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m8 0l1.669.864l1.858.282l.842 1.68l1.337 1.32L13.4 6l.306 1.854l-1.337 1.32l-.842 1.68l-1.858.282L8 12l-1.669-.864l-1.858-.282l-.842-1.68l-1.337-1.32L2.6 6l-.306-1.854l1.337-1.32l.842-1.68L6.331.864z"></svg:path><svg:path d="M4 11.794V16l4-1l4 1v-4.206l-2.018.306L8 13.126L6.018 12.1z"></svg:path></svg:g>`,
})
export class BiAwardFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
