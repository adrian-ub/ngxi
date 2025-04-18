import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDivide1Icon],svg[subway-divide-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 228.3v85.3h512v-85.3zM298.7 57.7h-85.3V143h85.3zm-85.4 426.6h85.3V399h-85.3z"></svg:path>`,
})
export class SubwayDivide1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
