import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsApplenewsIcon],svg[simple-icons-applenews-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 12.94c2.726 4.673 6.394 8.385 11.039 11.058H1.416A1.416 1.416 0 0 1 0 22.582zM0 1.414C0 .634.632.002 1.412.002H6.22L24 17.758v4.773c0 .39-.154.762-.43 1.038a1.47 1.47 0 0 1-1.037.43H17.76L0 6.241M12.963.002h9.619A1.42 1.42 0 0 1 24 1.42v9.625C21.265 6.494 17.616 2.775 12.963.002"></svg:path>`
})
export class SimpleIconsApplenewsIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
