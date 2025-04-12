import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCodepenIcon],svg[lucide-codepen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12 2l10 6.5v7L12 22L2 15.5v-7zm0 20v-6.5"></svg:path><svg:path d="m22 8.5l-10 7l-10-7"></svg:path><svg:path d="m2 15.5l10-7l10 7M12 2v6.5"></svg:path></svg:g>`
})
export class LucideCodepenIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
