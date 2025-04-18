import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiJoystickIcon],svg[openmoji-joystick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ea5a47" d="M17 55v-3h7v3"></svg:path><svg:circle cx="36" cy="17" r="10" fill="#ea5a47"></svg:circle><svg:path fill="#3f3f3f" d="M27 55c0-3.866 4.03-7 9-7s9 3.134 9 7"></svg:path><svg:path fill="#9b9b9a" stroke="#9b9b9a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M33 27h6v21h-6z"></svg:path><svg:path fill="#9b9b9a" d="M14 55h44v10H14z"></svg:path><svg:path fill="#d22f27" d="m41 8.75l-6.78 17.677l2.688-.199a8.34 8.34 0 0 0 5.284-2.42l.855-.855a7.42 7.42 0 0 0 2.153-4.708l.075-1.029a7.32 7.32 0 0 0-1.585-5.104z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 55h44v10H14z"></svg:path><svg:path stroke-miterlimit="10" d="M27 55c0-3.866 4.03-7 9-7s9 3.134 9 7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 55v-3h7v3m15-10.297V27h-6v17.705"></svg:path><svg:circle cx="36" cy="17" r="10" stroke-miterlimit="10"></svg:circle></svg:g>`,
})
export class OpenmojiJoystickIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
