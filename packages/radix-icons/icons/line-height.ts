import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[radixIconsLineHeightIcon],svg[radix-icons-line-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.782 2.217a.4.4 0 0 0-.565 0l-2 2a.4.4 0 0 0 .565.566L3.1 3.466v8.068l-1.317-1.317a.4.4 0 0 0-.565.566l2 2a.4.4 0 0 0 .565 0l2-2a.4.4 0 0 0-.565-.566L3.9 11.534V3.466l1.318 1.317a.4.4 0 0 0 .565-.566zM8.5 4a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1zM8 7.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`
})
export class RadixIconsLineHeightIcon {

  readonly viewBox = input("0 0 15 15");
  readonly width = input("1em");
  readonly height = input("1em");
}
