import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsCloudflareworkersIcon],svg[simple-icons-cloudflareworkers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.213.063l8.879 12.136l-8.67 11.739h2.476l8.665-11.735l-8.89-12.14Zm4.728 0l9.02 11.992l-9.018 11.883h2.496L24 12.656v-1.199L15.434.063ZM7.178 2.02L.01 11.398l-.01 1.2l7.203 9.644l1.238-1.676l-6.396-8.556l6.361-8.313Z"></svg:path>`
})
export class SimpleIconsCloudflareworkersIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
