import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsFlatIcon],svg[simple-icons-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.546 17.455v3.272a3.273 3.273 0 1 1-3.273-3.273Zm8.727-8.728V12A3.273 3.273 0 0 1 12 15.273H5.455a3.273 3.273 0 0 1 0-6.546zM24 0v3.273a3.273 3.273 0 0 1-3.273 3.273H7.637a3.273 3.273 0 0 1 0-6.546Z"></svg:path>`
})
export class SimpleIconsFlatIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
