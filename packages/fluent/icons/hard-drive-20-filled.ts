import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHardDrive20FilledIcon],svg[fluent-hard-drive-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10c-.588 0-1.136.169-1.599.461l2.25-5.249A2 2 0 0 1 6.489 4h7.104c.742 0 1.43.41 1.763 1.088c.544 1.106 1.53 3.207 2.333 5.432A3 3 0 0 0 16 10zm12 1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H3.987A2 2 0 0 1 2 14v-1a2 2 0 0 1 2-2zm-.5 3.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></svg:path>`,
})
export class FluentHardDrive20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
