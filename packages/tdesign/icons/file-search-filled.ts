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
  template: `<svg:path fill="currentColor" d="M13 1H3v22h11.796A6.252 6.252 0 1 1 21 12.25V9h-8z"></svg:path><svg:path fill="currentColor" d="M21 7v-.414L15.414 1H15v6zm-3.75 5.5a4.75 4.75 0 1 0 2.576 8.741l1.675 1.673l1.413-1.415l-1.674-1.671a4.75 4.75 0 0 0-3.99-7.328m-2.75 4.75a2.75 2.75 0 1 1 5.5 0a2.75 2.75 0 0 1-5.5 0"></svg:path>`,
})
export class TdesignFileSearchFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
