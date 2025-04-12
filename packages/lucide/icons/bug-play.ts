import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBugPlayIcon],svg[lucide-bug-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696zM14.12 3.88L16 2"></svg:path><svg:path d="M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"></svg:path><svg:path d="M20.97 5c0 2.1-1.6 3.8-3.5 4M3 21c0-2.1 1.7-3.9 3.8-4M6 13H2m4.53-4C4.6 8.8 3 7.1 3 5m5-3l1.88 1.88M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"></svg:path></svg:g>`
})
export class LucideBugPlayIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
