import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundMovingIcon],svg[ic-round-moving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.7 17.29c.39.39 1.02.39 1.41 0L8.7 12.7a.996.996 0 0 1 1.41 0l1.17 1.17a3 3 0 0 0 4.24 0L19.7 9.7l1.44 1.44a.5.5 0 0 0 .85-.35V6.5a.48.48 0 0 0-.49-.5h-4.29c-.45 0-.67.54-.35.85l1.44 1.44l-4.17 4.17a.996.996 0 0 1-1.41 0l-1.17-1.17a3 3 0 0 0-4.24 0L2.7 15.88c-.38.39-.38 1.03 0 1.41"></svg:path>`,
})
export class IcRoundMovingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
