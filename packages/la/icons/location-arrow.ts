import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laLocationArrowIcon],svg[la-location-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4.438l-.906 2.187l-8 19l-.907 2.125l2.157-.813L16 24.063l7.656 2.875l2.157.813l-.907-2.125l-8-19zm0 5.093l6.188 14.719l-5.844-2.188l-.344-.125l-.344.125l-5.844 2.188z"></svg:path>`,
})
export class LaLocationArrowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
