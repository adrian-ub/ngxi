import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceBinIcon],svg[guidance-bin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9.5 9v9m5-9v9m-6-13.5h-6v.25l.24 1.05A70 70 0 0 1 4.5 21.398V22.5h15v-1.102c0-5.249.59-10.48 1.76-15.598l.24-1.05V4.5h-6m-7 0V4a3.5 3.5 0 1 1 7 0v.5m-7 0h7"></svg:path>`,
})
export class GuidanceBinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
