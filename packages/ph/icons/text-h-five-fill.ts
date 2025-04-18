import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextHFiveFillIcon],svg[ph-text-h-five-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-80 128a8 8 0 0 1-16 0v-32H72v32a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0v32h40V80a8 8 0 0 1 16 0Zm40-40a32 32 0 1 1-21.34 55.85a8 8 0 0 1 10.67-11.92a16 16 0 1 0 0-24a8 8 0 0 1-13.17-7.61l8-38A8 8 0 0 1 160 88h32a8 8 0 0 1 0 16h-25.51L163 120.37a34 34 0 0 1 5-.37"></svg:path>`,
})
export class PhTextHFiveFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
