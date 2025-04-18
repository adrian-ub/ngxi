import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoDotSingleIcon],svg[entypo-dot-single-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.8 10a2.2 2.2 0 0 0 4.4 0a2.2 2.2 0 0 0-4.4 0"></svg:path>`,
})
export class EntypoDotSingleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
