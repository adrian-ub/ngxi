import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideChevronsLeftRightEllipsisIcon],svg[lucide-chevrons-left-right-ellipsis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 8l4 4l-4 4M6 8l-4 4l4 4m2-4h.01M12 12h.01M16 12h.01"></svg:path>`
})
export class LucideChevronsLeftRightEllipsisIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
