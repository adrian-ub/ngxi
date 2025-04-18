import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagMalaysiaIcon],svg[openmoji-flag-malaysia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path fill="#d22f27" d="M5 17h62v5H5zm0 9h62v4H5zm0 8h62v4H5zm0 8h62v4H5zm0 8h62v5H5z"></svg:path><svg:path fill="#1e50a0" d="M5 17h29v21H5z"></svg:path><svg:g fill="#f1b31c" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.845 27.5a6.215 6.215 0 0 1 5.405-5.885a7.5 7.5 0 0 0-1.297-.115c-3.702 0-6.703 2.686-6.703 6s3 6 6.703 6a7.5 7.5 0 0 0 1.297-.115a6.215 6.215 0 0 1-5.405-5.885"></svg:path><svg:path d="m24.612 25.969l2.097-3.418l-1.451 3.723l3.409-2.192l-2.964 2.74l4.047-.532l-3.889 1.214l3.883 1.233l-4.044-.552l2.949 2.755l-3.398-2.209l1.433 3.73l-2.079-3.428L24.236 33l-.348-3.969l-2.097 3.418l1.451-3.723l-3.409 2.192l2.964-2.74l-4.047.532l3.889-1.214l-3.883-1.233l4.044.552l-2.949-2.755l3.398 2.209l-1.433-3.73l2.079 3.428l.369-3.967z"></svg:path></svg:g><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagMalaysiaIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
