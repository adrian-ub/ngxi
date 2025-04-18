import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGesture24RegularIcon],svg[fluent-gesture-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 17.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5M6.749 4.005h10.505a.75.75 0 0 1 .101 1.493l-.102.007h-6.502L20.524 9.3a.75.75 0 0 1 .16 1.313l-.095.057L6.1 17.928a.75.75 0 0 1-.76-1.29l.088-.051l12.976-6.5L6.477 5.454c-.74-.288-.575-1.351.167-1.443zh10.505zM19.75 4a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5"></svg:path>`,
})
export class FluentGesture24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
