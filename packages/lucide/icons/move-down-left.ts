import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMoveDownLeftIcon],svg[lucide-move-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19H5v-6m14-8L5 19"></svg:path>`
})
export class LucideMoveDownLeftIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
