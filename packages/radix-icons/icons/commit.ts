import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsCommitIcon],svg[radix-icons-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.95 7.5a2.45 2.45 0 1 1-4.9 0a2.45 2.45 0 0 1 4.9 0m.913.5a3.4 3.4 0 0 1-6.726 0H.5a.5.5 0 0 1 0-1h3.637a3.4 3.4 0 0 1 6.726 0H14.5a.5.5 0 0 1 0 1z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsCommitIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
