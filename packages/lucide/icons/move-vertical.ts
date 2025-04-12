import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMoveVerticalIcon],svg[lucide-move-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v20m-4-4l4 4l4-4M8 6l4-4l4 4"></svg:path>`
})
export class LucideMoveVerticalIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
