import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[lucideCameraOffIcon],svg[lucide-camera-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m2 2l20 20M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"></svg:path><svg:path d="M14.121 15.121A3 3 0 1 1 9.88 10.88"></svg:path></svg:g>`
})
export class LucideCameraOffIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
