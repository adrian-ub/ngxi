import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoFlagIcon],svg[entypo-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.926 5.584c-9.339 13.568-6.142-.26-14.037 6.357L6.684 19H4.665L1 4.59l1.85-.664c8.849-6.471 4.228 5.82 15.637 1.254c.364-.147.655.09.439.404"></svg:path>`,
})
export class EntypoFlagIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
