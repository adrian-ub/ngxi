import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsKyoceraIcon],svg[simple-icons-kyocera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.677 4.645L2.323 12V4.645zm-7.354 14.71h7.355L2.323 12zm7.354 0L17.032 12L9.677 4.645zM21.677 0h-7.355L9.677 4.645h7.355V12l4.645-4.645zm-12 19.355L14.323 24h7.355v-7.355L17.032 12v7.355z"></svg:path>`
})
export class SimpleIconsKyoceraIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
