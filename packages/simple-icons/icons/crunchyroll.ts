import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsCrunchyrollIcon],svg[simple-icons-crunchyroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.933 13.467a10.55 10.55 0 1 1 21.067-.8V12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12h.8a10.617 10.617 0 0 1-9.867-10.533M19.2 14a3.85 3.85 0 0 1-1.333-7.467A7.9 7.9 0 0 0 14 5.6a8.4 8.4 0 1 0 8.4 8.4a6.5 6.5 0 0 0-.133-1.6A3.42 3.42 0 0 1 19.2 14"></svg:path>`
})
export class SimpleIconsCrunchyrollIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
