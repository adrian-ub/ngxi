import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidTintIcon],svg[fa-solid-tint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91C0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82M176 448c-61.75 0-112-50.25-112-112c0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80c8.84 0 16 7.16 16 16s-7.16 16-16 16"></svg:path>`,
})
export class FaSolidTintIcon {
  readonly viewBox = input("0 0 352 512")
  readonly width = input("0.69em")
  readonly height = input("1em")
}
