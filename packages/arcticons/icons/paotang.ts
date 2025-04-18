import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPaotangIcon],svg[arcticons-paotang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 5.5h27a5 5 0 0 1 5 5v27a5 5 0 0 1-5 5h-27a5 5 0 0 1-5-5v-27a5 5 0 0 1 5-5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.635 20.341c5.747 0 9.452.481 11.497-1.156l4.233-3.244c1.314-.965 2.588-2.073 5.003-2.11h15.99"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m8.696 19.862l-.81-2.784c.985-.29 1.419-.488 2.403-.778m16.359-4.741q5.724-1.67 11.45-3.33l1.604 5.218M11.017 19.93L9.59 11.851l16.155-2.855l.822 4.597"></svg:path>`,
})
export class ArcticonsPaotangIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
