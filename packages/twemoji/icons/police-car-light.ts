import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiPoliceCarLightIcon],svg[twemoji-police-car-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#DD2E44" d="M34.16 28.812L31.244 2.678A3.01 3.01 0 0 0 28.251 0H7.664a3.01 3.01 0 0 0-2.997 2.704l-2.67 26.108z"></svg:path><svg:circle cx="18.069" cy="14" r="9.366" fill="#BE1931"></svg:circle><svg:path fill="#99AAB5" d="M35.521 29.18H.479L0 34c0 2 2 2 2 2h32s2 0 2-2z"></svg:path><svg:path fill="#CCD6DD" d="m35.594 29.912l-.073-.732C35.38 28.442 34.751 28 34 28H2c-.751 0-1.38.442-1.521 1.18l-.073.732z"></svg:path><svg:path fill="#EC9DAD" d="m29.647 13.63l-7.668-1.248l4.539-6.308a.375.375 0 0 0-.523-.523l-6.309 4.538l-1.247-7.667a.375.375 0 0 0-.74 0l-1.248 7.667l-6.308-4.538a.375.375 0 0 0-.523.523l4.538 6.308L6.49 13.63a.374.374 0 0 0 0 .74l7.668 1.248l-4.538 6.308a.375.375 0 0 0 .523.523l6.308-4.538l1.248 7.667a.374.374 0 0 0 .74 0l1.247-7.667l6.308 4.538a.375.375 0 0 0 .523-.523l-4.538-6.308l7.668-1.248a.374.374 0 0 0 0-.74"></svg:path>`,
})
export class TwemojiPoliceCarLightIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
