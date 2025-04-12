import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideLockIcon],svg[lucide-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="11" x="3" y="11" rx="2" ry="2"></svg:rect><svg:path d="M7 11V7a5 5 0 0 1 10 0v4"></svg:path></svg:g>`
})
export class LucideLockIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
