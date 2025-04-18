import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsAutomotiveIcon],svg[flat-color-icons-automotive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#F44336" stroke-miterlimit="10" stroke-width="4" d="M7 20v-8c0-2.2 1.8-4 4-4h14c1.2 0 2.4.6 3.2 1.6L35 18"></svg:path><svg:g fill="#37474F"><svg:circle cx="35" cy="37" r="5"></svg:circle><svg:circle cx="13" cy="37" r="5"></svg:circle></svg:g><svg:path fill="#F44336" d="M40.2 17L33 14H7c-1.2 0-2 .8-2 2v10c0 1.2.8 2 2 2h1c0-2.8 2.2-5 5-5s5 2.2 5 5h12c0-2.8 2.2-5 5-5s5 2.2 5 5h1c1.2 0 2-.8 2-2v-5.2c0-1.6-1.2-3.2-2.8-3.8"></svg:path><svg:g fill="#546E7A"><svg:circle cx="24" cy="37" r="3"></svg:circle><svg:circle cx="35" cy="37" r="2"></svg:circle><svg:circle cx="13" cy="37" r="2"></svg:circle><svg:path d="M30.4 39c-.3-.6-.4-1.3-.4-2s.2-1.4.4-2H17.6c.3.6.4 1.3.4 2s-.2 1.4-.4 2z"></svg:path></svg:g>`,
})
export class FlatColorIconsAutomotiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
