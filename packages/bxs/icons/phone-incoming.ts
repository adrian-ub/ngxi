import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsPhoneIncomingIcon],svg[bxs-phone-incoming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.793 6.793L13 4v7h7l-2.793-2.793l4.5-4.5l-1.414-1.414z"></svg:path><svg:path fill="currentColor" d="M16.422 13.443a1 1 0 0 0-1.391.043l-2.392 2.461c-.576-.11-1.734-.471-2.926-1.66c-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.86 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.291.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.324 21 17.705 21c.203 0 .326-.006.359-.008a1 1 0 0 0 .648-.291l1.861-2.171a1 1 0 0 0-.086-1.391z"></svg:path>`,
})
export class BxsPhoneIncomingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
