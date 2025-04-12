import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideGrabIcon],svg[lucide-grab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4m0-.4V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2m0-.1V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5m0 0a2 2 0 0 0-2-2a2 2 0 0 0-2 2"></svg:path><svg:path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8a2 2 0 1 1 4 0"></svg:path></svg:g>`
})
export class LucideGrabIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
