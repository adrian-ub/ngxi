import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laUnderlineIcon],svg[la-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v12c0 4.43 3.57 8 8 8s8-3.57 8-8V4h-2v12c0 3.371-2.629 6-6 6s-6-2.629-6-6V4zM6 26v2h20v-2z"></svg:path>`,
})
export class LaUnderlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
