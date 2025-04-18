import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlatbreadIcon],svg[openmoji-flatbread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="23" fill="#fcea2b"></svg:circle><svg:path fill="#f1b31c" d="M54.695 22.61A23 23 0 0 1 14.02 42.792A23.001 23.001 0 1 0 54.695 22.61"></svg:path><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36" cy="36" r="23"></svg:circle><svg:path stroke-linecap="round" d="M46.264 25.894L25.051 47.107m22.984-12.371L33.893 48.879m-6.791-13.863l-3.536 3.535m14.142-14.142l-7.071 7.071m-1.484-8.555l-7.071 7.071"></svg:path></svg:g>`,
})
export class OpenmojiFlatbreadIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
