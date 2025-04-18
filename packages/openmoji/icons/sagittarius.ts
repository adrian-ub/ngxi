import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSagittariusIcon],svg[openmoji-sagittarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b399c8" d="M12 12h48v48H12z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="2" d="M12 12h48v48H12z"></svg:path><svg:path stroke-width="3" d="M37.81 24.19h9.996v9.996M24.19 47.81l23.62-23.62m-9.4 19.25l-9.99-9.98"></svg:path></svg:g>`,
})
export class OpenmojiSagittariusIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
