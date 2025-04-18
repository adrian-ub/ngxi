import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAfroPickIcon],svg[icon-park-afro-pick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21 4.37207L4.02944 21.3426L26.6569 43.9701L43.6274 26.9995"></svg:path><svg:path d="M26.6572 10.0288L9.68666 26.9994"></svg:path><svg:path d="M32.3135 15.6855L15.3429 32.6561"></svg:path><svg:path d="M37.9707 21.3428L21.0001 38.3133"></svg:path><svg:path fill="#2F88FF" d="M16.0504 41.8487L20.2931 37.606L10.3936 27.7065L6.15091 31.9492L8.27223 34.0705L9.68645 38.3131L13.9291 39.7274L16.0504 41.8487Z"></svg:path></svg:g>`,
})
export class IconParkAfroPickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
