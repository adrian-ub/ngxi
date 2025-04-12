import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsEyeSlash16SolidIcon],svg[heroicons-eye-slash-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l10.5 10.5a.75.75 0 1 0 1.06-1.06l-1.322-1.323a7 7 0 0 0 2.16-3.11a.87.87 0 0 0 0-.567A7.003 7.003 0 0 0 4.82 3.76zm3.196 3.195l1.135 1.136A1.502 1.502 0 0 1 9.45 8.389l1.136 1.135a3 3 0 0 0-4.109-4.109" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m7.812 10.994l1.816 1.816A7.003 7.003 0 0 1 1.38 8.28a.87.87 0 0 1 0-.566a7 7 0 0 1 1.113-2.039l2.513 2.513a3 3 0 0 0 2.806 2.806"></svg:path>`
})
export class HeroiconsEyeSlash16SolidIcon {

  readonly viewBox = input("0 0 16 16");
  readonly width = input("1em");
  readonly height = input("1em");
}
