import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailCopy32FilledIcon],svg[fluent-mail-copy-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 5a4.5 4.5 0 0 0-4.372 3.432l11.871 6.43l11.874-6.43A4.5 4.5 0 0 0 25.5 5zM6 19.5v-8.863l11.523 6.242a1 1 0 0 0 .953 0L30 10.637V19.5a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 6 19.5M4 9.758A4.5 4.5 0 0 0 2 13.5v6a8.5 8.5 0 0 0 8.5 8.5h11c1.56 0 2.935-.794 3.742-2H10.5A6.5 6.5 0 0 1 4 19.5z"></svg:path>`,
})
export class FluentMailCopy32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
