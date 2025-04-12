import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsFaceitIcon],svg[simple-icons-faceit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.999 2.705a.167.167 0 0 0-.312-.1a1141 1141 0 0 0-6.053 9.375H.218c-.221 0-.301.282-.11.352c7.227 2.73 17.667 6.836 23.5 9.134c.15.06.39-.08.39-.18z"></svg:path>`
})
export class SimpleIconsFaceitIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
