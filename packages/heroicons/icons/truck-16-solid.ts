import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsTruck16SolidIcon],svg[heroicons-truck-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.908 2.067A.98.98 0 0 0 2 3.05V8h6V3.05a.98.98 0 0 0-.908-.983a32.5 32.5 0 0 0-4.184 0m10.011 2.655A.98.98 0 0 0 11.968 4H10a1 1 0 0 0-1 1v6.268A2 2 0 0 1 12 13h1a.977.977 0 0 0 .985-1a32 32 0 0 0-1.066-7.278"></svg:path><svg:path fill="currentColor" d="M11 13a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-9-1V9h6v3a1 1 0 0 1-1 1a2 2 0 1 0-4 0a1 1 0 0 1-1-1"></svg:path><svg:path fill="currentColor" d="M6 13a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`
})
export class HeroiconsTruck16SolidIcon {

  readonly viewBox = input("0 0 16 16");
  readonly width = input("1em");
  readonly height = input("1em");
}
