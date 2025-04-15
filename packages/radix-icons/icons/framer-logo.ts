import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsFramerLogoIcon],svg[radix-icons-framer-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.383 1.296A.5.5 0 0 1 3.84.997h7.66a.5.5 0 0 1 .5.5V5.5a.5.5 0 0 1-.5.5H8.635l2.894 3.162a.5.5 0 0 1-.369.838H8v3.5a.5.5 0 0 1-.854.354l-4-4A.5.5 0 0 1 3 9.5v-4a.5.5 0 0 1 .5-.5h2.865L3.471 1.835a.5.5 0 0 1-.089-.54M7.72 5L4.975 1.997H11V5zm-.44 1H4v3h6.025zm-2.573 4L7 12.293V10z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsFramerLogoIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
