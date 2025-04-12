import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsSignalSlash20SolidIcon],svg[heroicons-signal-slash-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.22 2.22a.75.75 0 0 1 1.06 0l6.783 6.782a1 1 0 0 1 .935.935l6.782 6.783a.75.75 0 1 1-1.06 1.06l-6.783-6.782a1 1 0 0 1-.935-.935L2.22 3.28a.75.75 0 0 1 0-1.06m1.416 14.144a9.004 9.004 0 0 1-1.39-10.936L3.349 6.53a7.5 7.5 0 0 0 1.348 8.773a.75.75 0 0 1-1.061 1.061m2.828-2.828a5 5 0 0 1-1.213-5.103l1.262 1.262a3.5 3.5 0 0 0 1.012 2.78a.75.75 0 0 1-1.06 1.06m9.899-9.899a9.004 9.004 0 0 1 1.39 10.937l-1.103-1.104a7.5 7.5 0 0 0-1.348-8.772a.75.75 0 1 1 1.061-1.061m-2.828 2.828a5 5 0 0 1 1.213 5.103l-1.262-1.262a3.5 3.5 0 0 0-1.012-2.78a.75.75 0 0 1 1.06-1.06"></svg:path>`
})
export class HeroiconsSignalSlash20SolidIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
