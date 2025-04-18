import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLockersDuotoneIcon],svg[ph-lockers-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v152H40V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M192 72a8 8 0 0 1-8 8h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8m-8 24h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16M72 80h24a8 8 0 0 0 0-16H72a8 8 0 0 0 0 16m24 16H72a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16m128-48v176a8 8 0 0 1-16 0v-16h-72v16a8 8 0 0 1-16 0v-16H48v16a8 8 0 0 1-16 0V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16M120 192V48H48v144Zm16 0h72V48h-72Z"></svg:path></svg:g>`,
})
export class PhLockersDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
