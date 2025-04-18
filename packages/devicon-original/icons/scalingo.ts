import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalScalingoIcon],svg[devicon-original-scalingo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#21cfee" d="M55.74 9.651c4.092-7.029 13.262-9.65 20.482-5.86c7.22 3.792 9.756 12.562 5.666 19.588L54.187 70.954c-4.093 7.026-13.263 9.65-20.483 5.857c-7.22-3.79-9.756-12.56-5.666-19.588zm0 0"></svg:path><svg:path fill="#173aee" d="M76.79 56.738c4.093-7.029 13.262-9.65 20.482-5.86c7.22 3.793 9.756 12.563 5.666 19.588l-27.7 47.576c-4.094 7.026-13.264 9.65-20.483 5.857c-7.22-3.79-9.76-12.56-5.666-19.588zm0 0"></svg:path>`,
})
export class DeviconOriginalScalingoIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
