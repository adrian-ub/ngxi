import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsToptalIcon],svg[simple-icons-toptal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.227 10.038L10.188 0l-2.04 2.04l3.773 3.769l-8.155 8.153L13.807 24l2.039-2.039l-3.772-3.771l8.16-8.152zM8.301 14.269l6.066-6.063l1.223 1.223l-6.064 6.113l-1.223-1.26z"></svg:path>`
})
export class SimpleIconsToptalIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
