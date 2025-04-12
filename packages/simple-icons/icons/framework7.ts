import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsFramework7Icon],svg[simple-icons-framework7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 12a11.95 11.95 0 0 1 2.713-7.6h18.574L8.037 23.33C3.358 21.694 0 17.24 0 12m22.271-6.208A11.94 11.94 0 0 1 24 12c0 6.627-5.373 12-12 12q-1.193-.002-2.32-.224zM4.295 2.8A11.95 11.95 0 0 1 12 0c2.933 0 5.62 1.052 7.705 2.8z"></svg:path>`
})
export class SimpleIconsFramework7Icon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
