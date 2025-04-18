import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLoginIcon],svg[mynaui-login-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.496 21H6.5c-1.105 0-2-1.151-2-2.571V5.57c0-1.419.895-2.57 2-2.57h7"></svg:path><svg:path d="M13 15.5L9.5 12L13 8.5m6.5 3.496h-10"></svg:path></svg:g>`,
})
export class MynauiLoginIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
