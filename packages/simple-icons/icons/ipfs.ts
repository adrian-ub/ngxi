import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsIpfsIcon],svg[simple-icons-ipfs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0L1.608 6v12L12 24l10.392-6V6zm-1.073 1.445a1.8 1.8 0 0 0 2.138 0l7.534 4.35a1.8 1.8 0 0 0 0 .403l-7.535 4.35a1.8 1.8 0 0 0-2.137 0l-7.536-4.35a1.8 1.8 0 0 0 0-.402zM21.324 7.4q.164.12.349.201v8.7a1.8 1.8 0 0 0-1.069 1.852l-7.535 4.35a1.8 1.8 0 0 0-.349-.2l-.009-8.653a1.8 1.8 0 0 0 1.07-1.851zm-18.648.048l7.535 4.35a1.8 1.8 0 0 0 1.069 1.852v8.7q-.186.081-.349.202l-7.535-4.35a1.8 1.8 0 0 0-1.069-1.852v-8.7a2 2 0 0 0 .35-.202z"></svg:path>`
})
export class SimpleIconsIpfsIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
