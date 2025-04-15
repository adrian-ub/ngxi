import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsListBulletIcon],svg[radix-icons-list-bullet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 5.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M4 4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M4.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zM2.25 7.5a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-.75 3.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsListBulletIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
