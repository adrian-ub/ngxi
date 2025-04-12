import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSparkarIcon],svg[simple-icons-sparkar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.199 20.001L20.801 12v8.001L11.999 24zM11.998 0L3.199 3.999V12l17.602-8.001zM3.803 12.275l7.592 3.453l8.803-4.002l-7.594-3.45z"></svg:path>`
})
export class SimpleIconsSparkarIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
