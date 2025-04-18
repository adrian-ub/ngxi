import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laArrowUpIcon],svg[la-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4.094l-.719.687l-8.5 8.5L8.22 14.72L15 7.938V28h2V7.937l6.781 6.782l1.438-1.438l-8.5-8.5z"></svg:path>`,
})
export class LaArrowUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
