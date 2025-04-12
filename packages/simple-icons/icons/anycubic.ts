import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAnycubicIcon],svg[simple-icons-anycubic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.762.534l8.728 3.481l8.469 7.449l-6.494-.631zm10.72 10.463l6.518.581l-7.826 8.749l-8.649 3.139zM6.592.601l10.699 10.331L7.355 23.44L0 12.465z"></svg:path>`
})
export class SimpleIconsAnycubicIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
