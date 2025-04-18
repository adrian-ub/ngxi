import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNebenanDeIcon],svg[arcticons-nebenan-de-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5L7.556 13.722L24 21.944l16.444-8.222zv37"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.444 13.722v20.556l-4.11 2.055v-8.222l-8.223 4.111v8.222L24 42.5l-4.111-2.056v-8.222l-8.222-4.11v8.221l-4.111-2.055V13.722"></svg:path>`,
})
export class ArcticonsNebenanDeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
