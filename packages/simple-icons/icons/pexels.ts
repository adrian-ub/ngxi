import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPexelsIcon],svg[simple-icons-pexels-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 0A1.5 1.5 0 0 0 0 1.5v21A1.5 1.5 0 0 0 1.5 24h21a1.5 1.5 0 0 0 1.5-1.5v-21A1.5 1.5 0 0 0 22.5 0zm6.75 6.75h5.272a3.843 3.843 0 0 1 .626 7.635v2.865H8.25zm1.5 1.5v7.5h2.898v-2.814h.873a2.343 2.343 0 1 0 0-4.686z"></svg:path>`
})
export class SimpleIconsPexelsIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
