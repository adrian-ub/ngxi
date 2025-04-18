import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCornerUpRightIcon],svg[uil-corner-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.61 7.25a1 1 0 0 0-.22-.33l-4.63-4.63a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l2.92 2.92h-8a4 4 0 0 0-4 4V21a1 1 0 0 0 2 0V10.63a2 2 0 0 1 2-2h8l-2.92 2.92a1 1 0 0 0 .71 1.71a1 1 0 0 0 .7-.3l4.63-4.62a1.2 1.2 0 0 0 .22-.34a1 1 0 0 0 0-.75"></svg:path>`,
})
export class UilCornerUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
