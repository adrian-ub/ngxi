import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPhonepeIcon],svg[arcticons-phonepe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.805 8.5l9.092 10.331m-15.66 0h21.526M29.287 39.5c-.443-9.006-.39-20.669-.39-20.669"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.97 18.831c0 3.128-.119 7.93-.119 9.02a4.233 4.233 0 0 0 4.964 4.297a30 30 0 0 0 5.191-1.117"></svg:path>`,
})
export class ArcticonsPhonepeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
