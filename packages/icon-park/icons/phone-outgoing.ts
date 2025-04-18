import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPhoneOutgoingIcon],svg[icon-park-phone-outgoing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M28 20L41 7.5"></svg:path><svg:path stroke-linecap="round" d="M28 7H41V20"></svg:path><svg:path fill="#2F88FF" d="M14.3758 9.79424C15.1023 9.79424 15.7717 10.1883 16.1244 10.8235L18.5708 15.2303C18.8911 15.8073 18.9062 16.5052 18.611 17.0955L16.2542 21.8092C16.2542 21.8092 16.9372 25.3206 19.7956 28.179C22.6541 31.0374 26.1537 31.7086 26.1537 31.7086L30.8666 29.3522C31.4573 29.0568 32.1557 29.0721 32.7329 29.393L37.1522 31.85C37.7869 32.2028 38.1804 32.8719 38.1804 33.598V38.6715C38.1804 41.2552 35.7805 43.1213 33.3325 42.2952C28.3045 40.5987 20.4998 37.3685 15.553 32.4216C10.6061 27.4748 7.37586 19.6701 5.67934 14.6422C4.85332 12.1941 6.71941 9.79424 9.30306 9.79424H14.3758Z"></svg:path></svg:g>`,
})
export class IconParkPhoneOutgoingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
