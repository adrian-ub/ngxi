import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPenSize5Icon],svg[material-symbols-pen-size-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.875 18.125Q5 17.25 5 16t.875-2.125l8-8Q14.75 5 16 5t2.125.875T19 8t-.875 2.125l-8 8Q9.25 19 8 19t-2.125-.875"></svg:path>`,
})
export class MaterialSymbolsPenSize5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
