import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsEmbarkIcon],svg[simple-icons-embark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.658 16.662v-6.644C9.197 10.017 13.687 5.533 13.69 0h6.653c-.003 9.202-7.472 16.662-16.685 16.662M3.656 24v-6.672h16.689V24z"></svg:path>`
})
export class SimpleIconsEmbarkIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
