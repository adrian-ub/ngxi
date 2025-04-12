import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsUser20SolidIcon],svg[heroicons-user-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-6.535 6.494a1.23 1.23 0 0 0 .41 1.41A9.96 9.96 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1c.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003"></svg:path>`
})
export class HeroiconsUser20SolidIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
