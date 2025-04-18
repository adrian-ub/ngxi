import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenCwsIcon],svg[token-cws-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.105 10.731l1.42-2.994l5.211 6.461v.427c-1.074.364-2.19.59-3.32.672zm-2.369 3.657c.152.09.332.17.521.246l1.786-3.283l-2.307-3.14z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 0 0 9-9a9 9 0 1 0-9 9m0-.474A8.53 8.53 0 0 0 20.526 12A8.53 8.53 0 0 0 12 3.474a8.526 8.526 0 0 0 0 17.052M7.737 15.16c3.946 1.45 7.645.602 9 0v.493c-3.491 1.397-7.456.583-9 0zm3.79-7.422v4.974l.09.123l1.719 2.472v.01c1.217-.048 2.776-.483 3.4-.697v-.421zm3.315 3.42l1.895 2.264v-5.21zm-4.798.194l-1.781 3.283c1.369.54 3.619.73 4.684.682l-2.903-3.96z" clip-rule="evenodd"></svg:path>`,
})
export class TokenCwsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
