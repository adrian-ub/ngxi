import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7CloudFillIcon],svg[f7-cloud-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.262 45.52h29.086c7.43 0 13.172-5.626 13.172-12.82c0-7.29-6-12.75-13.946-12.68c-3-6.047-8.507-9.54-15-9.54c-8.648 0-15.937 6.82-16.617 15.563c-4.547 1.242-7.477 5.063-7.477 9.68c0 5.812 4.36 9.797 10.782 9.797"></svg:path>`,
})
export class F7CloudFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
