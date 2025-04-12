import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGhostIcon],svg[simple-icons-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0m.256 2.313c2.47.005 5.116 2.008 5.898 2.962l.244.3c1.64 1.994 3.569 4.34 3.569 6.966c0 3.719-2.98 5.808-6.158 7.508c-1.433.766-2.98 1.508-4.748 1.508c-4.543 0-8.366-3.569-8.366-8.112c0-.706.17-1.425.342-2.15c.122-.515.244-1.033.307-1.549c.548-4.539 2.967-6.795 8.422-7.408a4 4 0 0 1 .49-.026Z"></svg:path>`
})
export class SimpleIconsGhostIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
