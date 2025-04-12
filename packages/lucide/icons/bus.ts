import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBusIcon],svg[lucide-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 6v6m7-6v6M2 12h19.6M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2s-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"></svg:path><svg:circle cx="7" cy="18" r="2"></svg:circle><svg:path d="M9 18h5"></svg:path><svg:circle cx="16" cy="18" r="2"></svg:circle></svg:g>`
})
export class LucideBusIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
