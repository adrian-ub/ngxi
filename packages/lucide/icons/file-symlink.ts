import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideFileSymlinkIcon],svg[lucide-file-symlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m10 18l3-3l-3-3m4-10v4a2 2 0 0 0 2 2h4"></svg:path><svg:path d="M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"></svg:path></svg:g>`
})
export class LucideFileSymlinkIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
