import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFlipRightIcon],svg[hugeicons-flip-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 9.667v4.666M16.5 3.015c-.5-.017-1-.018-1.5-.016m1.5 17.986c-.5.017-1 .018-1.5.017m4.255-17.465a5 5 0 0 1 2.217 2.226M21.5 18.18a5 5 0 0 1-2.245 2.283M12 5.505c0-1.958-.638-2.498-2.5-2.498c-2.532 0-5.454-.25-6.897 2.248C2 6.3 2 7.7 2 10.501V13.5c0 2.801 0 4.202.603 5.246c1.443 2.498 4.365 2.248 6.897 2.248c1.862 0 2.5-.54 2.5-2.498z" color="currentColor"></svg:path>`,
})
export class HugeiconsFlipRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
