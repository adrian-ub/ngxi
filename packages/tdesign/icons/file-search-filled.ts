import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileSearchFilledIcon],svg[tdesign-file-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.414 1H3v22h11.796A6.252 6.252 0 1 1 21 12.25V6.586zM14.5 7.5V3L19 7.5z"></svg:path><svg:path fill="currentColor" d="M17.25 14.5a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m-4.75 2.75a4.75 4.75 0 1 1 8.74 2.578l1.674 1.671l-1.413 1.415l-1.675-1.673A4.75 4.75 0 0 1 12.5 17.25"></svg:path>`,
})
export class TdesignFileSearchFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
