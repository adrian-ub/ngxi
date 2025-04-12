import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAlacrittyIcon],svg[simple-icons-alacritty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.065 0l-8.57 21.269H5.09L12 5.025l6.91 16.244h3.594L13.934 0zM12 9.935L9.702 15.5c1.475 4.54 1.475 4.54 2.298 8.5c.823-3.96.823-3.96 2.297-8.5z"></svg:path>`
})
export class SimpleIconsAlacrittyIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
