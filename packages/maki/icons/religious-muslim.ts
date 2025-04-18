import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiReligiousMuslimIcon],svg[maki-religious-muslim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.096 12.096a6.5 6.5 0 1 1 .48-8.658a5.147 5.147 0 1 0 0 8.124a7 7 0 0 1-.48.534M10.1 6.5H8L9.7 8L9 10.5L11 9l2 1.5l-.7-2.5L14 6.5h-2.1l-.9-2z"></svg:path>`,
})
export class MakiReligiousMuslimIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
