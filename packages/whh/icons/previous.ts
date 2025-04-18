import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPreviousIcon],svg[whh-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m962.428 1013l-563-463q-15-15-15-37.5t15-38.5l563-463q25-27 62 13v976q-37 40-62 13m-834 11q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhPreviousIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
