import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSystemApplicationFilledIcon],svg[tdesign-system-application-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v9h20zM7.004 5.5v2.004H5V5.5zm4 0v2.004H9V5.5zM22 13H2v9h20zM7.004 16.5v2.004H5V16.5zm4 2.004H9V16.5h2.004z"></svg:path>`,
})
export class TdesignSystemApplicationFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
