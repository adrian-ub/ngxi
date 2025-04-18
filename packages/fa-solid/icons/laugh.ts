import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidLaughIcon],svg[fa-solid-laugh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8m80 152c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32m-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32m88 272h-16c-73.4 0-134-55-142.9-126c-1.2-9.5 6.3-18 15.9-18h270c9.6 0 17.1 8.4 15.9 18c-8.9 71-69.5 126-142.9 126"></svg:path>`,
})
export class FaSolidLaughIcon {
  readonly viewBox = input("0 0 496 512")
  readonly width = input("0.97em")
  readonly height = input("1em")
}
