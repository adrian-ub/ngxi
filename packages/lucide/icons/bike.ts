import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBikeIcon],svg[lucide-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="18.5" cy="17.5" r="3.5"></svg:circle><svg:circle cx="5.5" cy="17.5" r="3.5"></svg:circle><svg:circle cx="15" cy="5" r="1"></svg:circle><svg:path d="M12 17.5V14l-3-3l4-3l2 3h2"></svg:path></svg:g>`
})
export class LucideBikeIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
