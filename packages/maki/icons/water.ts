import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiWaterIcon],svg[maki-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 14c2.077 0 4.5-1.288 4.5-4.568C12 7.207 8.538 2.288 7.5 1C6.577 2.288 3 7.09 3 9.432C3 12.712 5.423 14 7.5 14"></svg:path>`,
})
export class MakiWaterIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
