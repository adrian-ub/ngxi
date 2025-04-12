import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideTransgenderIcon],svg[lucide-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 16v6m2-2h-4m8-18h4v4M2 2l7.17 7.17M2 5.355V2h3.357M22 2l-7.17 7.17M8 5L5 8"></svg:path><svg:circle cx="12" cy="12" r="4"></svg:circle></svg:g>`
})
export class LucideTransgenderIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
