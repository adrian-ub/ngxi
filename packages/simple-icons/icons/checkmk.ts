import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsCheckmkIcon],svg[simple-icons-checkmk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.187 8.738v3.985l4.883-3.157v8.217l1.925 1.111l1.926-1.111V9.57l4.882 3.158V8.742l-6.808-4.269zM12 0l10.375 5.999V18L12 24L1.625 18.006V6.003z"></svg:path>`
})
export class SimpleIconsCheckmkIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
