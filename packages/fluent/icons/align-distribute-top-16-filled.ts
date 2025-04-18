import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignDistributeTop16FilledIcon],svg[fluent-align-distribute-top-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 1a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zm0 7a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zm8 6a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 9.5 10h-3A1.5 1.5 0 0 0 5 11.5v1A1.5 1.5 0 0 0 6.5 14zm2-7A1.5 1.5 0 0 0 13 5.5v-1A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5v1A1.5 1.5 0 0 0 4.5 7z"></svg:path>`,
})
export class FluentAlignDistributeTop16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
