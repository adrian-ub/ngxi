import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnFlagOutlineIcon],svg[typcn-flag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.383 4.318a1 1 0 0 0-1.09.217a3.25 3.25 0 0 1-4.586 0a5.25 5.25 0 0 0-7.414 0A1 1 0 0 0 5 5.242v13a1 1 0 0 0 2 0v-4.553a3.25 3.25 0 0 1 4.293.26a5.25 5.25 0 0 0 7.414 0a1 1 0 0 0 .293-.707v-8a1 1 0 0 0-.617-.924m-7.09 1.631A5.25 5.25 0 0 0 17 7.087v2.311a3.746 3.746 0 0 1-4.646-.51C10.906 7.441 8.756 7.145 7 7.961V5.689a3.247 3.247 0 0 1 4.293.26m1.414 6.585A5.23 5.23 0 0 0 9 11.002c-.681 0-1.361.131-2 .394V9.085a3.746 3.746 0 0 1 4.646.51A4.73 4.73 0 0 0 15 10.981c.687 0 1.366-.164 2-.459v2.272a3.25 3.25 0 0 1-4.293-.26"></svg:path>`,
})
export class TypcnFlagOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
