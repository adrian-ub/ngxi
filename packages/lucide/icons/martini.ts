import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideMartiniIcon],svg[lucide-martini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 22h8m-4-11v11m7-19l-7 8l-7-8Z"></svg:path>`
})
export class LucideMartiniIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
