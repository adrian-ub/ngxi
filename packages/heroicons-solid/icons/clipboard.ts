import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidClipboardIcon],svg[heroicons-solid-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 3a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"></svg:path><svg:path d="M6 3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3"></svg:path></svg:g>`
})
export class HeroiconsSolidClipboardIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
