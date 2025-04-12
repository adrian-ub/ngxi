import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideSignpostBigIcon],svg[lucide-signpost-big-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9H4L2 7l2-2h6m4 0h6l2 2l-2 2h-6m-4 13V4a2 2 0 1 1 4 0v18m-6 0h8"></svg:path>`
})
export class LucideSignpostBigIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
