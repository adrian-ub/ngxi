import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsEquals20SolidIcon],svg[heroicons-equals-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 6a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5zm0 7.5a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5z"></svg:path>`
})
export class HeroiconsEquals20SolidIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
