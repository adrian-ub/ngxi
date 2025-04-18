import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsCameraIdentificationIcon],svg[flat-color-icons-camera-identification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#512DA8" d="M33.9 12.1H14.2L17.6 7c.4-.6 1-.9 1.7-.9h9.6c.7 0 1.3.3 1.7.9z"></svg:path><svg:path fill="#8667C4" d="M14 11H8V9.2C8 8.5 8.5 8 9.2 8h3.6c.7 0 1.2.5 1.2 1.2z"></svg:path><svg:path fill="#5E35B1" d="M40 42H8c-2.2 0-4-1.8-4-4V14c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4"></svg:path><svg:circle cx="24" cy="26" r="12" fill="#512DA8"></svg:circle><svg:circle cx="24" cy="26" r="9" fill="#B388FF"></svg:circle><svg:g fill="#616161"><svg:path d="m38.912 40.703l1.696-1.697l7.353 7.353l-1.697 1.696z"></svg:path><svg:circle cx="35" cy="35" r="10"></svg:circle></svg:g><svg:path fill="#37474F" d="m42.305 44.106l1.697-1.696l3.96 3.959l-1.698 1.697z"></svg:path><svg:circle cx="35" cy="35" r="8" fill="#64B5F6"></svg:circle><svg:path fill="#BBDEFB" d="M39.3 31.4c-1.1-1.3-2.6-2-4.2-2s-3.2.7-4.2 2c-.2.3-.2.6.1.9c.3.2.6.2.9-.1c.8-1 2-1.5 3.3-1.5s2.5.6 3.3 1.5c.1.1.3.2.5.2c.1 0 .3 0 .4-.1c.1-.2.1-.6-.1-.9"></svg:path><svg:path fill="#C7A7FF" d="M29 23c-1.2-1.4-3-2.2-4.8-2.2s-3.6.8-4.8 2.2c-.5.5-.4 1.3.1 1.8s1.3.4 1.8-.1c1.5-1.7 4.3-1.7 5.8 0c.3.3.6.4 1 .4q.45 0 .9-.3c.4-.4.5-1.3 0-1.8"></svg:path><svg:ellipse cx="11" cy="13.5" fill="#8667C4" rx="2" ry="1.5"></svg:ellipse>`,
})
export class FlatColorIconsCameraIdentificationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
