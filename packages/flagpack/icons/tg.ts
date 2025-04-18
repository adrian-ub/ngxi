import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackTgIcon],svg[flagpack-tg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#5EAA22" stroke="#F7FCFF" stroke-width="2" d="M0-1h-1v26h34V-1z"></svg:path><svg:path fill="#FECA00" fill-rule="evenodd" d="M0 6v4h32V6zm0 8v4h32v-4z" clip-rule="evenodd"></svg:path><svg:path fill="#F50101" d="M0 0h16v14H0z"></svg:path><svg:path fill="#F7FCFF" fill-rule="evenodd" d="m8.25 10.144l-3.72 2.302l1.445-3.864L3 5.98h3.648L8.25 2.13l1.223 3.85h3.604l-2.532 2.603l1.246 3.674z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlagpackTgIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
