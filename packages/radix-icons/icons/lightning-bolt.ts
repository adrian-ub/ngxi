import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsLightningBoltIcon],svg[radix-icons-lightning-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.697.04a.5.5 0 0 1 .296.542L8.09 6h4.41a.5.5 0 0 1 .4.8l-6 8a.5.5 0 0 1-.893-.382L6.91 9H2.5a.5.5 0 0 1-.4-.8l6-8a.5.5 0 0 1 .597-.16M3.5 8h4a.5.5 0 0 1 .493.582L7.33 12.56L11.5 7h-4a.5.5 0 0 1-.493-.582L7.67 2.44z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsLightningBoltIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
