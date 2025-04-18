import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLayoutFillIcon],svg[ph-layout-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 56h176v40H40Zm176 144H112v-88h104z"></svg:path>`,
})
export class PhLayoutFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
