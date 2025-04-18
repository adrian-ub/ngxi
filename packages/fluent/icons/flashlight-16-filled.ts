import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlashlight16FilledIcon],svg[fluent-flashlight-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 1 1-1 0v-1a.5.5 0 0 1 .5-.5m2.646.146a.5.5 0 1 1 .707.708l-1 1a.5.5 0 1 1-.707-.708zm-7.707.708a1.5 1.5 0 0 1 2.122 0l5.585 5.585a1.5 1.5 0 0 1 0 2.122l-.939.939L5.5 2.793zM5 3.707v3.586l-3.646 3.646a1.5 1.5 0 0 0 0 2.122l1.586 1.585a1.5 1.5 0 0 0 2.122 0L8.707 11h3.586zm1.855 6.147l-1 1a.5.5 0 0 1-.708-.708l1-1a.5.5 0 1 1 .708.708M14.5 5h-1a.5.5 0 0 1 0-1h1a.5.5 0 1 1 0 1"></svg:path>`,
})
export class FluentFlashlight16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
