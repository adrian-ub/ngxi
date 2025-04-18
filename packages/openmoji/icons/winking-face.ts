import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWinkingFaceIcon],svg[openmoji-winking-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="36" cy="36" r="23" fill="#FCEA2B"></svg:circle><svg:path fill="#EA5A47" d="m38.254 51.023l3.023-1.346l1.169-1.443l.318-1.61l-3.699.045h-9.968l1.314 3.008l3.159 1.346z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.648 30.028a6.28 6.28 0 0 1 2.66-3.643a6.28 6.28 0 0 1 4.32-1.375m23.376 6.077a7.16 7.16 0 0 0-8.51-1.17m.289 15.852c0 2.937-2.308 5.272-6.934 5.272s-6.964-2.342-6.964-5.272"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M28.94 45.769s7.047 2.52 13.75.054m4.313-9.963a5.9 5.9 0 0 0-2.87-.922a7.5 7.5 0 0 0-3.18.775"></svg:path><svg:circle cx="28.079" cy="35.309" r="3"></svg:circle><svg:circle cx="36" cy="36" r="23" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle>`,
})
export class OpenmojiWinkingFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
