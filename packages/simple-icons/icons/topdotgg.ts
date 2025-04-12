import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsTopdotggIcon],svg[simple-icons-topdotgg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4.379h7.622V12H2.329A2.32 2.32 0 0 1 .008 9.679Zm24 0H8.757v15.243h3.114a4.507 4.507 0 0 0 4.507-4.508V12h3.115A4.507 4.507 0 0 0 24 7.493z"></svg:path>`
})
export class SimpleIconsTopdotggIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
