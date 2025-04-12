import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidPhoneIncomingIcon],svg[heroicons-solid-phone-incoming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m14.414 7l3.293-3.293a1 1 0 0 0-1.414-1.414L13 5.586V4a1 1 0 1 0-2 0v4.003a1 1 0 0 0 .617.921A1 1 0 0 0 12 9h4a1 1 0 1 0 0-2z"></svg:path><svg:path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.04 11.04 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5z"></svg:path></svg:g>`
})
export class HeroiconsSolidPhoneIncomingIcon {

  readonly viewBox = input("0 0 20 20");
  readonly width = input("1em");
  readonly height = input("1em");
}
