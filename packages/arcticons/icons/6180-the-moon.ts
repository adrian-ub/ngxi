import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons6180TheMoonIcon],svg[arcticons-6180-the-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m18.537 20.577l2.313-1.26v9.252"></svg:path><svg:circle cx="13.565" cy="25.505" r="3.065" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.358 20.446c-.51-.669-1.289-1.129-2.578-1.129h-.215a3.065 3.065 0 0 0-3.065 3.065v3.122m14.859-1.447a2.313 2.313 0 0 0-2.313 2.313h0a2.313 2.313 0 0 0 2.313 2.312h1.503a2.313 2.313 0 0 0 2.313-2.312h0a2.313 2.313 0 0 0-2.313-2.313m0 0a2.313 2.313 0 0 0 2.313-2.313h0a2.313 2.313 0 0 0-2.313-2.313H25.36a2.313 2.313 0 0 0-2.313 2.313h0a2.313 2.313 0 0 0 2.313 2.313m-.001 0h1.503"></svg:path><svg:rect width="6.129" height="9.252" x="31.371" y="19.317" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.065" ry="3.065"></svg:rect>`,
})
export class Arcticons6180TheMoonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
