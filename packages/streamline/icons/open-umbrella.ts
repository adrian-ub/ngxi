import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineOpenUmbrellaIcon],svg[streamline-open-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2 7a5 5 0 1 1 10 0zm5-5V.5M10 12a1.5 1.5 0 0 1-3 0V7"></svg:path>`,
})
export class StreamlineOpenUmbrellaIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
