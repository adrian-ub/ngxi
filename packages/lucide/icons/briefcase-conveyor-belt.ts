import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideBriefcaseConveyorBeltIcon],svg[lucide-briefcase-conveyor-belt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 20v2m4-2v2m4-2v2m3-2H3m3 0v2m2-6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"></svg:path><svg:rect width="16" height="10" x="4" y="6" rx="2"></svg:rect></svg:g>`
})
export class LucideBriefcaseConveyorBeltIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
