import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidBookOpenIcon],svg[heroicons-solid-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4.804A8 8 0 0 0 5.5 4c-1.255 0-2.443.29-3.5.804v10A8 8 0 0 1 5.5 14c1.669 0 3.218.51 4.5 1.385A7.96 7.96 0 0 1 14.5 14c1.255 0 2.443.29 3.5.804v-10A8 8 0 0 0 14.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 1 1-2 0z"></svg:path>`
})
export class HeroiconsSolidBookOpenIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
