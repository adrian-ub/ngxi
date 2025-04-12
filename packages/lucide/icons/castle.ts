import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCastleIcon],svg[lucide-castle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2m-4-9V4H6v7"></svg:path><svg:path d="M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4m13-11V9M2 11V9m4-5V2m12 2V2m-8 2V2m4 2V2"></svg:path></svg:g>`
})
export class LucideCastleIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
