import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSoundOffSolidIcon],svg[teenyicons-sound-off-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1.5a.5.5 0 0 0-.757-.429L3.362 3.998H1.5c-.829 0-1.5.67-1.5 1.5V9.5c0 .829.67 1.5 1.5 1.5h1.862l4.88 2.929A.5.5 0 0 0 9 13.5zm4.208 5.996L14.62 8.91l-.707.707L12.5 8.203l-1.414 1.413l-.707-.707l1.414-1.413l-1.414-1.413l.707-.707L12.5 6.789l1.415-1.413l.706.707z"></svg:path>`,
})
export class TeenyiconsSoundOffSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
