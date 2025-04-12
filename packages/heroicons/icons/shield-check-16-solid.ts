import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsShieldCheck16SolidIcon],svg[heroicons-shield-check-16-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.5 1.709a.75.75 0 0 0-1 0a8.96 8.96 0 0 1-4.84 2.217a.75.75 0 0 0-.654.72Q2 4.821 2 5c0 4.052 2.295 7.567 5.653 9.317a.75.75 0 0 0 .694 0a10.5 10.5 0 0 0 5.647-9.672a.75.75 0 0 0-.654-.719A8.96 8.96 0 0 1 8.5 1.71m2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106z" clip-rule="evenodd"></svg:path>`
})
export class HeroiconsShieldCheck16SolidIcon {

  readonly viewBox = input("0 0 16 16");
  readonly width = input("1em");
  readonly height = input("1em");
}
