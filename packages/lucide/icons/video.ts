import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideVideoIcon],svg[lucide-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></svg:path><svg:rect width="14" height="12" x="2" y="6" rx="2"></svg:rect></svg:g>`
})
export class LucideVideoIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
