import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsEllipsisVertical20SolidIcon],svg[heroicons-ellipsis-vertical-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m0 5.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m1.5 7a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"></svg:path>`
})
export class HeroiconsEllipsisVertical20SolidIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
