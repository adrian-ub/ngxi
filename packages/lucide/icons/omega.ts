import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideOmegaIcon],svg[lucide-omega-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437a8 8 0 1 1 8.494-.001a.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"></svg:path>`
})
export class LucideOmegaIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
