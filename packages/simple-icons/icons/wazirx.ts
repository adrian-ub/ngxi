import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsWazirxIcon],svg[simple-icons-wazirx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.965 21.964h21.924v-2.485H.965zm6.752-3.81h15.195L24 6.343L7.717 18.155Zm9.384-8.704L5.205 18.072H1.93l6.045-9.814l3.858-6.22l5.269 7.412Zm-11.693.223L0 6.067l.994 10.762z"></svg:path>`
})
export class SimpleIconsWazirxIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
