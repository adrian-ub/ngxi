import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsSailsdotjsIcon],svg[simple-icons-sailsdotjs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.238 24s-9.175-14.602 9.7-24v24zm12.621 0V9.125S17.871 14.039 23.992 24z"></svg:path>`
})
export class SimpleIconsSailsdotjsIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
