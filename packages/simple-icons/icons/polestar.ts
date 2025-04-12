import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPolestarIcon],svg[simple-icons-polestar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.549 0l-.457.555v11.191h11.19l.554-.457l-9.4-1.89zM.719 12.26l-.555.457L9.563 14.6l1.886 9.4l.457-.555V12.26Z"></svg:path>`
})
export class SimpleIconsPolestarIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
