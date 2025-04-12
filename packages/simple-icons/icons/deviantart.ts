import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsDeviantartIcon],svg[simple-icons-deviantart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.207 4.794l.23-.43V0H15.07l-.436.44l-2.058 3.925l-.646.436H4.58v5.993h4.04l.36.436l-4.175 7.98l-.24.43V24H8.93l.436-.44l2.07-3.925l.644-.436h7.35v-5.993h-4.05l-.36-.438l4.186-7.977z"></svg:path>`
})
export class SimpleIconsDeviantartIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
