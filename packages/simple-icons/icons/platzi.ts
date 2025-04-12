import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPlatziIcon],svg[simple-icons-platzi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.64 1.127L2.485 9.282a3.84 3.84 0 0 0 0 5.436l8.155 8.155a3.84 3.84 0 0 0 5.436 0l2.72-2.718l-2.72-2.718l-2.718 2.718L5.203 12l8.155-8.155l5.437 5.437l-5.437 5.436l2.718 2.72L21.513 12a3.84 3.84 0 0 0 0-5.437l-5.448-5.436a3.83 3.83 0 0 0-5.425 0"></svg:path>`
})
export class SimpleIconsPlatziIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
