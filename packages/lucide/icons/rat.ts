import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideRatIcon],svg[lucide-rat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 22H4a2 2 0 0 1 0-4h12m-2.764 0a3 3 0 0 0-2.2-5M16 9h.01"></svg:path><svg:path d="M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3"></svg:path><svg:path d="M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015A4 4 0 0 0 8 18"></svg:path></svg:g>`
})
export class LucideRatIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
