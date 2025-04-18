import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsBinocularsIcon],svg[flat-color-icons-binoculars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#37474F"><svg:circle cx="33" cy="16" r="6"></svg:circle><svg:circle cx="15" cy="16" r="6"></svg:circle><svg:path d="m46.7 25l-15.3 3H16.7L1.4 25l4.3-7.9C6.8 15.2 8.8 14 11 14h26.2c2.2 0 4.2 1.2 5.3 3.1z"></svg:path><svg:circle cx="38" cy="30" r="10"></svg:circle><svg:circle cx="10" cy="30" r="10"></svg:circle><svg:circle cx="24" cy="28" r="5"></svg:circle></svg:g><svg:circle cx="24" cy="28" r="2" fill="#546E7A"></svg:circle><svg:g fill="#a0f"><svg:circle cx="38" cy="30" r="7"></svg:circle><svg:circle cx="10" cy="30" r="7"></svg:circle></svg:g><svg:path fill="#CE93D8" d="M41.7 27.7c-1-1.1-2.3-1.7-3.7-1.7s-2.8.6-3.7 1.7c-.4.4-.3 1 .1 1.4s1 .3 1.4-.1c1.2-1.3 3.3-1.3 4.5 0c.2.2.5.3.7.3s.5-.1.7-.3c.4-.3.4-.9 0-1.3M10 26c-1.4 0-2.8.6-3.7 1.7c-.4.4-.3 1 .1 1.4s1 .3 1.4-.1c1.2-1.3 3.3-1.3 4.5 0c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 .1-1.4c-1-1-2.4-1.6-3.8-1.6"></svg:path>`,
})
export class FlatColorIconsBinocularsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
