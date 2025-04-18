import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarArrowBack20FilledIcon],svg[fluent-star-arrow-back-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.104 2.899a1 1 0 0 1 1.794 0l1.93 3.911l4.317.628a1 1 0 0 1 .554 1.705l-.55.536a5.5 5.5 0 0 0-7.96 6.259L6.14 17.541a1 1 0 0 1-1.45-1.054l.737-4.299l-3.124-3.045a1 1 0 0 1 .554-1.705l4.317-.628zM14.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-.896-6.396l-.897.896h1.543A2.75 2.75 0 0 1 17 16.25v.25a.5.5 0 0 1-1 0v-.25a1.75 1.75 0 0 0-1.75-1.75h-1.543l.897.896a.5.5 0 0 1-.708.708l-1.752-1.753a.5.5 0 0 1 .002-.705l1.75-1.75a.5.5 0 0 1 .708.708"></svg:path>`,
})
export class FluentStarArrowBack20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
