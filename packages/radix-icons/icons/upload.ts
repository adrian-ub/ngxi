import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsUploadIcon],svg[radix-icons-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.818 1.182a.45.45 0 0 0-.636 0l-3 3a.45.45 0 1 0 .636.636L7.05 2.586V9.5a.45.45 0 1 0 .9 0V2.586l2.232 2.232a.45.45 0 1 0 .636-.636zM2.5 10a.5.5 0 0 1 .5.5V12c0 .554.446 1 .996 1h7.005A1 1 0 0 0 12 12v-1.5a.5.5 0 1 1 1 0V12a2 2 0 0 1-1.999 2H3.996A1.997 1.997 0 0 1 2 12v-1.5a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsUploadIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
