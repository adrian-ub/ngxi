import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBowlChopsticks24RegularIcon],svg[fluent-bowl-chopsticks-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.4 2.376a.75.75 0 0 0-1.3.748L9.635 11H2.75a.75.75 0 0 0-.75.75V12c0 5.523 4.477 10 10 10s10-4.477 10-10v-.25a.75.75 0 0 0-.75-.75h-5.885L10.4 2.376a.75.75 0 0 0-1.3.748L13.635 11h-2.27zM4.788 16.5h14.424a8.5 8.5 0 0 1-7.212 4a8.5 8.5 0 0 1-7.212-4M4.045 15a8.5 8.5 0 0 1-.53-2.5h16.97a8.5 8.5 0 0 1-.53 2.5z"></svg:path>`,
})
export class FluentBowlChopsticks24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
