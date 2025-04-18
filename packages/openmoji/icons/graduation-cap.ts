import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiGraduationCapIcon],svg[openmoji-graduation-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3f3f3f" stroke="#3f3f3f" stroke-miterlimit="10" stroke-width="2" d="M56 27.917v17.979H16V27.917"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-miterlimit="10" stroke-width="2" d="M10.043 28.5v8.406"></svg:path><svg:circle cx="10.043" cy="36.906" r="2" fill="#f1b31c"></svg:circle><svg:path fill="#f1b31c" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.747" d="M12.043 45.896H8.25l1.897-8.12h0z"></svg:path><svg:path fill="#3f3f3f" d="M4 22.875h64v5.042H4zm52 8.042v14.979H16V30.917"></svg:path><svg:circle cx="36" cy="22.002" r="3"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 22.875h64v5.042H4z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.747" d="M56 30.917v14.979H16V30.917"></svg:path>`,
})
export class OpenmojiGraduationCapIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
