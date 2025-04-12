import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsArkecosystemIcon],svg[simple-icons-arkecosystem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.8 0A1.8 1.8 0 0 0 0 1.8v20.4c0 .995.805 1.8 1.8 1.8h20.4c.995 0 1.8-.805 1.8-1.8V1.8c0-.995-.805-1.8-1.8-1.8zm10.223 4.39l9.29 15.098l-9.29-9.82l-9.351 9.82l9.351-15.097zm0 7.583l1.633 1.691h-3.285zM9.31 14.762h5.41l1.496 1.574H7.813l1.496-1.574z"></svg:path>`
})
export class SimpleIconsArkecosystemIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
