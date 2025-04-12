import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGreatlearningIcon],svg[simple-icons-greatlearning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.373 0c-6.617 0-12 5.383-12 12s5.383 12 12 12h.856q1.435-1.764 2.867-3.531h-3.723c-4.669 0-8.469-3.8-8.469-8.469c0-4.67 3.8-8.469 8.469-8.469h4.375L21.615 0Zm3.723 20.469l3.531-4.354v-6.013h-7.502l-2.861 3.533h6.832z"></svg:path>`
})
export class SimpleIconsGreatlearningIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
