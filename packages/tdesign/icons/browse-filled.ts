import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBrowseFilledIcon],svg[tdesign-browse-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path><svg:path fill="currentColor" d="M12 3C6.42 3 1.698 6.654.09 11.696L-.009 12l.097.304C1.7 17.346 6.421 21 12 21s10.302-3.654 11.91-8.696l.098-.304l-.097-.304C22.3 6.654 17.578 3 12 3m0 4a5 5 0 1 1 0 10a5 5 0 0 1 0-10"></svg:path>`,
})
export class TdesignBrowseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
