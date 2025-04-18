import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsZygiskdetachIcon],svg[arcticons-zygiskdetach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.342 28.838v6.122a3.58 3.58 0 0 1-3.58 3.58H8.08a3.58 3.58 0 0 1-3.58-3.58V14.473h21.184m-10.261 0v-3.545c0-.81.656-1.467 1.467-1.467h7.062c.81 0 1.467.657 1.467 1.467v3.545"></svg:path><svg:circle cx="33.873" cy="19.533" r="9.627" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.078 23.328l7.591-7.59m-7.591 0l7.591 7.59M26.9 26.506l-10.721-6.725v13.45z"></svg:path>`,
})
export class ArcticonsZygiskdetachIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
