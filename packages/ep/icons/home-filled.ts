import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epHomeFilledIcon],svg[ep-home-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 128L128 447.936V896h255.936V640H640v256h255.936V447.936z"></svg:path>`,
})
export class EpHomeFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
