import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIncompleteWarningIcon],svg[carbon-incomplete-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 26a12 12 0 0 1 0-24zm3.826-21.236a10 10 0 0 1 3.242 2.168L22.48 5.52a12 12 0 0 0-3.89-2.602zM26 14a11.9 11.9 0 0 0-.917-4.59l-1.847.764A9.9 9.9 0 0 1 24 14zm1.38 14h-6.762L24 21.236zM24 18a1 1 0 0 0-.895.553l-5 10A1 1 0 0 0 19 30h10a1 1 0 0 0 .921-1.39l-5.026-10.057A1 1 0 0 0 24 18"></svg:path>`,
})
export class CarbonIncompleteWarningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
