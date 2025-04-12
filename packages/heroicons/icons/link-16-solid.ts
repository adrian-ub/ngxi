import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsLink16SolidIcon],svg[heroicons-link-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.914 6.025a.75.75 0 0 1 1.06 0a3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402a.75.75 0 0 1 1.251.827a2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828a.75.75 0 0 1 0-1.06"></svg:path><svg:path d="M7.086 9.975a.75.75 0 0 1-1.06 0a3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402a.75.75 0 0 1-1.251-.827a2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828a.75.75 0 0 1 0 1.06"></svg:path></svg:g>`
})
export class HeroiconsLink16SolidIcon {

  readonly viewBox = input("0 0 16 16");
  readonly width = input("1em");
  readonly height = input("1em");
}
