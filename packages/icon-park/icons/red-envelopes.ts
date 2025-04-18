import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRedEnvelopesIcon],svg[icon-park-red-envelopes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M40 4H8V44H40V4Z"></svg:path><svg:path stroke-linecap="round" d="M40 10C36 15.7625 32.3191 19.3207 28.3191 20.8915M19.7369 20.7775C15.7369 19.2067 12 15.7625 8 10L19.7369 20.7775Z"></svg:path><svg:path fill="#2F88FF" d="M24 27C26.4853 27 28.5 24.9853 28.5 22.5C28.5 20.0147 26.4853 18 24 18C21.5147 18 19.5 20.0147 19.5 22.5C19.5 24.9853 21.5147 27 24 27Z"></svg:path></svg:g>`,
})
export class IconParkRedEnvelopesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
