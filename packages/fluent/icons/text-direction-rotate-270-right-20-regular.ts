import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextDirectionRotate270Right20RegularIcon],svg[fluent-text-direction-rotate-270-right-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.854 5.146a.5.5 0 1 1-.707.708L7 4.707V9.5a.5.5 0 0 1-1 0V4.707L4.854 5.854a.5.5 0 1 1-.707-.708l2-2a.5.5 0 0 1 .707 0zm8 0a.5.5 0 1 1-.707.708L15 4.707V16.5a.5.5 0 0 1-1 0V4.707l-1.146 1.147a.5.5 0 1 1-.707-.708l2-2a.5.5 0 0 1 .707 0zM3 13.5a.5.5 0 0 1 .324-.468l8-3a.5.5 0 0 1 .352.936L9 11.972v3.057l2.676 1.003a.5.5 0 0 1-.352.936l-8-3A.5.5 0 0 1 3 13.5m1.924 0L8 14.654v-2.307z"></svg:path>`,
})
export class FluentTextDirectionRotate270Right20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
