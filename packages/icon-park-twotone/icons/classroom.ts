import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneClassroomIcon],svg[icon-park-twotone-classroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTClassroom0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="13" r="9" fill="#555"></svg:circle><svg:path d="M5 44c0-8.437 6.175-16.312 11.4-18c0 0 4.75 5.063 7.6 8.438L31.6 26c4.275.563 11.4 9.563 11.4 18"></svg:path><svg:path stroke-linecap="round" d="M2 44h44"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTClassroom0)"></svg:path>`,
})
export class IconParkTwotoneClassroomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
