import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsBoxModelIcon],svg[radix-icons-box-model-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm0 1h11v11H2zm2.5 2a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5zm.5 6V5h5v5z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsBoxModelIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
