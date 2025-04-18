import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAssaIcon],svg[token-assa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 20.485l-8.06-16.97l-5.225 10.606l-4.103.71l-.49.805H12l-8.133.607l-.655 1.212l8.182-.303l-8.485.909l-.303.909l8.182-.303l-8.485.909l-.303.909h7.09c1.189 0 1.983-1.412 2.231-2.121L13.94 12l2.097 4.243H13.8l1.49 4.242z"></svg:path>`,
})
export class TokenAssaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
