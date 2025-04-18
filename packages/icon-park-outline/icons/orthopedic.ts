import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineOrthopedicIcon],svg[icon-park-outline-orthopedic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="m23.028 36l10.975 6.999V24q11.511-7.815 8.457-14.434c-3.055-6.619-8-6.182-11.453-4.564Q27.552 6.619 26 14.04q-4.557-9.7-12.8-9.7c-8.242 0-8.906 9.724-7.725 12.105S7.773 20.112 13.001 24q-.113 17.345 1.442 18.656q2.85 2.209 8.585-6.656Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M27 25v6"></svg:path></svg:g>`,
})
export class IconParkOutlineOrthopedicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
