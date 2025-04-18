import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7HeartCircleFillIcon],svg[f7-heart-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m-5.742-34.36c2.554 0 4.547 1.454 5.742 3.634c1.172-2.18 3.21-3.633 5.719-3.633c4.054 0 6.96 3.047 6.96 7.265c0 6.282-6.632 12.047-11.507 15.165c-.375.234-.82.562-1.125.562s-.82-.328-1.219-.562c-4.875-3.118-11.531-8.883-11.531-15.164c0-4.22 2.93-7.266 6.96-7.266"></svg:path>`,
})
export class F7HeartCircleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
