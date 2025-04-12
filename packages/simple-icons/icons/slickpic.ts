import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSlickpicIcon],svg[simple-icons-slickpic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.483 18.308L6.056 14.085l2.52-9.201L24 9.104zm-13.414-5.37l12.263 3.354l1.654-6.033L9.72 6.9l-1.65 6.034zm.457 2.857l-4.891 1.311l-1.625-6.045l4.146-1.11l.501-1.835L0 9.902l2.478 9.215l9.178-2.467"></svg:path>`
})
export class SimpleIconsSlickpicIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
