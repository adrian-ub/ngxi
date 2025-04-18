import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRadioSelectedFilledIcon],svg[lsicon-radio-selected-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M14.5 8a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0Z"></svg:path><svg:path d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0Z"></svg:path><svg:path d="M12.5 8a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Z"></svg:path><svg:path d="M11.5 8a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0Z"></svg:path></svg:g>`,
})
export class LsiconRadioSelectedFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
