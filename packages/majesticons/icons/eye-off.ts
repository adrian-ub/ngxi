import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsEyeOffIcon],svg[majesticons-eye-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.4 6.23c-.44.33-.843.678-1.21 1.032a15.1 15.1 0 0 0-3.001 4.11a1.44 1.44 0 0 0 0 1.255a15.1 15.1 0 0 0 3 4.111C5.94 18.423 8.518 20 12 20c2.236 0 4.1-.65 5.61-1.562l-3.944-3.943a3 3 0 0 1-4.161-4.161L5.401 6.229zm15.266 9.608a15 15 0 0 0 2.145-3.21a1.44 1.44 0 0 0 0-1.255a15.1 15.1 0 0 0-3-4.111C18.06 5.577 15.483 4 12 4a10.8 10.8 0 0 0-2.808.363z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsEyeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
