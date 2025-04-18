import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDatabasePointIcon],svg[icon-park-twotone-database-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="ipTDatabasePoint0" fill="#555" d="M39 9c0 2.761-6.716 5-15 5S9 11.761 9 9s6.716-5 15-5s15 2.239 15 5"></svg:path><svg:path id="ipTDatabasePoint1" stroke="#fff" d="M39 9c0 2.761-6.716 5-15 5S9 11.761 9 9s6.716-5 15-5s15 2.239 15 5"></svg:path><svg:mask id="ipTDatabasePoint2"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 36v-6m-4 10H6m22 0h14"></svg:path><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 40a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 9v16c0 2.761-6.716 5-15 5S9 27.761 9 25V9"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 17c0 2.761-6.716 5-15 5S9 19.761 9 17"></svg:path><svg:use href="#ipTDatabasePoint0"></svg:use><svg:use href="#ipTDatabasePoint0"></svg:use><svg:use href="#ipTDatabasePoint1" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:use><svg:use href="#ipTDatabasePoint1" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:use></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDatabasePoint2)"></svg:path>`,
})
export class IconParkTwotoneDatabasePointIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
