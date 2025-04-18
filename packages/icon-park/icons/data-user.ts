import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDataUserIcon],svg[icon-park-data-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M22 8V20C22 22.2091 17.9706 24 13 24C8.02944 24 4 22.2091 4 20V8"></svg:path><svg:path d="M22 14C22 16.2091 17.9706 18 13 18C8.02944 18 4 16.2091 4 14"></svg:path><svg:path fill="#2F88FF" d="M22 8C22 10.2091 17.9706 12 13 12C8.02944 12 4 10.2091 4 8C4 5.79086 8.02944 4 13 4C17.9706 4 22 5.79086 22 8Z"></svg:path><svg:path d="M32 6H38C40.2091 6 42 7.79086 42 10V16"></svg:path><svg:path d="M16 42H10C7.79086 42 6 40.2091 6 38V32"></svg:path><svg:circle cx="35" cy="29" r="5" fill="#2F88FF"></svg:circle><svg:path fill="#2F88FF" d="M44 44H26C26 39.0294 30.0294 35 35 35C39.9706 35 44 39.0294 44 44Z"></svg:path></svg:g>`,
})
export class IconParkDataUserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
