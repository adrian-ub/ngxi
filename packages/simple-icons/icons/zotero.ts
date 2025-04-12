import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsZoteroIcon],svg[simple-icons-zotero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.231 2.462L7.18 20.923h14.564V24H2.256v-2.462L16.308 3.076H2.975V0h18.256z"></svg:path>`
})
export class SimpleIconsZoteroIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
