import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7PersonCropCircleIcon],svg[f7-person-crop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 51.906c13.055 0 23.906-10.828 23.906-23.906c0-13.055-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.945 4.095 28c0 13.078 10.828 23.906 23.906 23.906m0-15.914c-7.055 0-12.492 2.508-14.86 5.32C10 37.798 8.102 33.133 8.102 28c0-11.04 8.813-19.922 19.876-19.922c11.039 0 19.921 8.883 19.945 19.922c0 5.156-1.899 9.82-5.063 13.336c-2.367-2.813-7.804-5.344-14.86-5.344m0-3.984c4.5.047 8.039-3.797 8.039-8.836c0-4.735-3.562-8.672-8.04-8.672c-4.5 0-8.085 3.938-8.038 8.672c.023 5.039 3.516 8.789 8.039 8.836"></svg:path>`,
})
export class F7PersonCropCircleIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
