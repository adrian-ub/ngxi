import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidVialIcon],svg[fa-solid-vial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M477.7 186.1L309.5 18.3c-3.1-3.1-8.2-3.1-11.3 0l-34 33.9c-3.1 3.1-3.1 8.2 0 11.3l11.2 11.1L33 316.5c-38.8 38.7-45.1 102-9.4 143.5c20.6 24 49.5 36 78.4 35.9c26.4 0 52.8-10 72.9-30.1l246.3-245.7l11.2 11.1c3.1 3.1 8.2 3.1 11.3 0l34-33.9c3.1-3 3.1-8.1 0-11.2M318 256H161l148-147.7l78.5 78.3z"></svg:path>`,
})
export class FaSolidVialIcon {
  readonly viewBox = input("0 0 480 512")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
