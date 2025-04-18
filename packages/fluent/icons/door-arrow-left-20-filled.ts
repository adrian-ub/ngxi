import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDoorArrowLeft20FilledIcon],svg[fluent-door-arrow-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2.5A1.5 1.5 0 0 0 4.5 4v12A1.5 1.5 0 0 0 6 17.5h3.89a5.5 5.5 0 0 1 5.61-8.41V4A1.5 1.5 0 0 0 14 2.5zM8 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0m11 4.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-6.853-.354l-.003.003a.5.5 0 0 0-.144.348v.006a.5.5 0 0 0 .146.35l2 2a.5.5 0 0 0 .708-.707L13.707 15H16.5a.5.5 0 0 0 0-1h-2.793l1.147-1.146a.5.5 0 0 0-.708-.708z"></svg:path>`,
})
export class FluentDoorArrowLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
