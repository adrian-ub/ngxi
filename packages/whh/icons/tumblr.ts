import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTumblrIcon],svg[whh-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M864 1024q-66 0-113-47t-47-113t47-113t113-47t113 47t47 113t-47 113t-113 47m-480 0q-101 0-178.5-52T128 864V448H0V256q99 0 145.5-58T192 0h128v256h192v192H320v325q0 26 38.5 42.5T448 832t80-6.5t48-25.5v149q0 23-32.5 41t-75.5 26t-84 8"></svg:path>`,
})
export class WhhTumblrIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
