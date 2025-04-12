import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsXstateIcon],svg[simple-icons-xstate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.891 0h6.023l-6.085 10.563A10.65 10.65 0 0 1 15.891 0m6.055 23.999L8.078.001H2.055l6.919 12.015L2.055 24h6.023L12 17.236L15.892 24z"></svg:path>`
})
export class SimpleIconsXstateIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
