import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPhantomBlackIconIcon],svg[arcticons-phantom-black-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.857 21.357V42.5c-4.945-5.039-10.912-5.039-15.857 0c-4.945-5.039-10.912-5.039-15.857 0V21.357C9.458.214 38.53.214 39.857 21.357"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.399 17.399c2.185 0 3.958 1.773 3.958 3.958s-1.774 3.97-3.958 3.97c-2.197 0-3.97-1.785-3.97-3.97s1.773-3.958 3.97-3.958m13.214 0c2.185 0 3.958 1.773 3.958 3.958s-1.773 3.97-3.958 3.97c-2.197 0-3.97-1.785-3.97-3.97s1.773-3.958 3.97-3.958"></svg:path>`,
})
export class ArcticonsPhantomBlackIconIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
