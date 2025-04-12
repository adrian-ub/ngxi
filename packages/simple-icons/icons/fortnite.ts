import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsFortniteIcon],svg[simple-icons-fortnite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.767 14.171l.097-5.05H12.4V5.197h3.99L16.872 0H7.128v24l5.271-.985V14.17z"></svg:path>`
})
export class SimpleIconsFortniteIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
