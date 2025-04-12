import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMicIcon],svg[lucide-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3"></svg:path><svg:path d="M19 10v2a7 7 0 0 1-14 0v-2m7 9v3"></svg:path></svg:g>`
})
export class LucideMicIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
