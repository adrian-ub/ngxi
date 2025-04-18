import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiSunIcon],svg[openmoji-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FCEA2B" d="m66 36l-10.676 5.182l6.658 9.824l-11.84-.864l.864 11.84l-9.825-6.658L36 66l-5.182-10.676l-9.824 6.658l.864-11.84l-11.84.864l6.658-9.825L6 36l10.677-5.182l-6.659-9.824l11.84.864l-.864-11.84l9.825 6.658L36 6l5.182 10.677l9.824-6.659l-.864 11.84l11.84-.864l-6.658 9.825z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="36" cy="35.95" r="19.828"></svg:circle><svg:path d="m66 36l-10.676 5.182l6.658 9.824l-11.84-.864l.864 11.84l-9.825-6.658L36 66l-5.182-10.676l-9.824 6.658l.864-11.84l-11.84.864l6.658-9.825L6 36l10.677-5.182l-6.659-9.824l11.84.864l-.864-11.84l9.825 6.658L36 6l5.182 10.677l9.824-6.659l-.864 11.84l11.84-.864l-6.658 9.825z"></svg:path></svg:g>`,
})
export class OpenmojiSunIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
