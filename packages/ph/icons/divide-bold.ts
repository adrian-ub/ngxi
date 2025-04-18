import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDivideBoldIcon],svg[ph-divide-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M128 84a20 20 0 1 0-20-20a20 20 0 0 0 20 20m0 88a20 20 0 1 0 20 20a20 20 0 0 0-20-20"></svg:path>`,
})
export class PhDivideBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
