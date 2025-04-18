import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSaplingIcon],svg[icon-park-sapling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M26.9999 8.00001C22.3136 12.6863 23.0351 21.035 23.0351 21.035C23.0351 21.035 31.3136 21.6863 35.9999 17C40.6862 12.3137 40.0057 4.03509 40.0057 4.03509C40.0057 4.03509 31.6862 3.31372 26.9999 8.00001Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M23.0351 21.035L30.9999 13.0702M23.0351 21.035C23.0351 21.035 22.3136 12.6863 26.9999 8.00001C31.6862 3.31372 40.0057 4.03509 40.0057 4.03509C40.0057 4.03509 40.6862 12.3137 35.9999 17C31.3136 21.6863 23.0351 21.035 23.0351 21.035Z"></svg:path><svg:path fill="#2F88FF" d="M20.0001 21C23.8492 24.8434 22.9712 31.9711 22.9712 31.9711C22.9712 31.9711 15.8492 32.8434 12.0001 29C8.15094 25.1566 9.03226 18.0289 9.03226 18.0289C9.03226 18.0289 16.151 17.1566 20.0001 21Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22.9712 31.9711L16.0001 25M22.9712 31.9711C22.9712 31.9711 23.8492 24.8434 20.0001 21C16.151 17.1566 9.03226 18.0289 9.03226 18.0289C9.03226 18.0289 8.15094 25.1566 12.0001 29C15.8492 32.8434 22.9712 31.9711 22.9712 31.9711Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M23 4V44"></svg:path></svg:g>`,
})
export class IconParkSaplingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
