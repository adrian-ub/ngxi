import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsEnvelope16SolidIcon],svg[heroicons-envelope-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793q.039.014.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185l.076-.032V4.5A1.5 1.5 0 0 0 13.5 3z"></svg:path><svg:path d="M15 6.954L8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5z"></svg:path></svg:g>`
})
export class HeroiconsEnvelope16SolidIcon {

  readonly viewBox = input("0 0 16 16");
  readonly width = input("1em");
  readonly height = input("1em");
}
