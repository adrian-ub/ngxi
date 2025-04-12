import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGooglehangoutsIcon],svg[simple-icons-googlehangouts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0C6.2 0 1.5 4.7 1.5 10.5c0 5.5 5 10 10.5 10V24c6.35-3.1 10.5-8.2 10.5-13.5C22.5 4.7 17.8 0 12 0m-.5 12c0 1.4-.9 2.5-2 2.5V12H7V7.5h4.5zm6 0c0 1.4-.9 2.5-2 2.5V12H13V7.5h4.5z"></svg:path>`
})
export class SimpleIconsGooglehangoutsIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
