import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTextFormattingListBulletsPointsBulletUnorderedListListsBulletsIcon],svg[streamline-interface-text-formatting-list-bullets-points-bullet-unordered-list-lists-bullets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="1" cy="2.5" r=".5"></svg:circle><svg:path d="M4.5 2.5h9"></svg:path><svg:circle cx="1" cy="7" r=".5"></svg:circle><svg:path d="M4.5 7h9"></svg:path><svg:circle cx="1" cy="11.5" r=".5"></svg:circle><svg:path d="M4.5 11.5h9"></svg:path></svg:g>`,
})
export class StreamlineInterfaceTextFormattingListBulletsPointsBulletUnorderedListListsBulletsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
