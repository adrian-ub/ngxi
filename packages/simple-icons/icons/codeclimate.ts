import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsCodeclimateIcon],svg[simple-icons-codeclimate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.125 5.272l-4.511 4.475l2.684 2.659l1.827-1.813l5.19 5.145L24 13.079zM8.13 8.265L0 16.066l2.772 2.662l5.357-5.145l5.357 5.145l2.772-2.662z"></svg:path>`
})
export class SimpleIconsCodeclimateIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
