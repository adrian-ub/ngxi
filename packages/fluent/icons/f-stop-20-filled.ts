import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFStop20FilledIcon],svg[fluent-f-stop-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.08 5.681a2.583 2.583 0 0 1 3.525-1.955l.361.148a.75.75 0 1 0 .568-1.388l-.36-.148a4.083 4.083 0 0 0-5.572 3.09L8.991 9H5.75a.75.75 0 1 0 0 1.5h2.984l-.507 2.962c-.31 1.813-2.363 2.73-3.92 1.751l-.158-.098a.75.75 0 0 0-.798 1.27l.157.098c2.462 1.548 5.707.098 6.198-2.768l.55-3.215h2.994a.75.75 0 1 0 0-1.5h-2.737z"></svg:path>`,
})
export class FluentFStop20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
