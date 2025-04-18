import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsInEarHeadphonesSolidIcon],svg[teenyicons-in-ear-headphones-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1.654C6 .74 5.26 0 4.346 0H3.5A3.5 3.5 0 0 0 0 3.5V13h1v2h1v-2h1V7h1a2 2 0 0 0 2-2zM10.654 0C9.74 0 9 .74 9 1.654V5a2 2 0 0 0 2 2h1v6h1v2h1v-2h1V3.5A3.5 3.5 0 0 0 11.5 0z"></svg:path>`,
})
export class TeenyiconsInEarHeadphonesSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
