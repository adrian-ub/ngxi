import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowOutlineUpRight32FilledIcon],svg[fluent-arrow-outline-up-right-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.969 29.125a3 3 0 0 0 4.242 0l6.904-6.904l1.749 1.75c2.122 2.12 5.755.763 5.966-2.23l1.167-16.53a3 3 0 0 0-3.204-3.203L10.26 3.175c-2.994.212-4.35 3.845-2.228 5.967L9.78 10.89l-6.9 6.902a3 3 0 0 0 0 4.243z"></svg:path>`,
})
export class FluentArrowOutlineUpRight32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
