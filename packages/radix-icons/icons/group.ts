import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsGroupIcon],svg[radix-icons-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.45.95a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-1.5h1.5a.5.5 0 0 0 0-1zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-.5 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 1 1 0 1h-3a.5.5 0 0 1-.5-.5m-3.5-7.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0zm11.5-.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m-2-4.5a.5.5 0 1 0 0 1h1.5v1.5a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.501-.5zm-10 10a.5.5 0 0 1 .5.5v1.5h1.5a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5m12.5.5a.5.5 0 0 0-1 0v1.5h-1.5a.5.5 0 1 0 0 1h2a.5.5 0 0 0 .5-.5z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsGroupIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
