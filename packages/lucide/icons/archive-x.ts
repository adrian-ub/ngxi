import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideArchiveXIcon],svg[lucide-archive-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="5" x="2" y="3" rx="1"></svg:rect><svg:path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M9.5 17l5-5m-5 0l5 5"></svg:path></svg:g>`
})
export class LucideArchiveXIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
