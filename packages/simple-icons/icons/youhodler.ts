import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsYouhodlerIcon],svg[simple-icons-youhodler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.727 15.273l-3.636-2.182V4.364L8.364 0L12 2.182L15.636 0l7.273 4.364v8.727l-3.636 2.182v4.363L12 24l-7.273-4.364zM12 19.636l2.422-1.454v-5.818l4.851-2.909v-2.91L16.85 5.092L12 8L7.15 5.092L4.727 6.545v2.91l4.851 2.909v5.818z"></svg:path>`
})
export class SimpleIconsYouhodlerIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
