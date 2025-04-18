import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWaterGlassIcon],svg[streamline-water-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.2 11.73a2 2 0 0 1-2 1.77H4.78a2 2 0 0 1-2-1.77L1.5.5h11zM1.96 4.5h10.08"></svg:path>`,
})
export class StreamlineWaterGlassIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
