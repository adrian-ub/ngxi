import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiThumbsDownFillIcon],svg[gravity-ui-thumbs-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.9 14.315a1.38 1.38 0 0 1-2.542-.984L7.07 10H3.13a2 2 0 0 1-1.927-2.535l.879-3.162A4 4 0 0 1 6.404 1.4L11.5 2l.5 7zm4.352-5.762a.75.75 0 1 0 1.496-.106l-.5-7a.75.75 0 0 0-1.496.106z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiThumbsDownFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
