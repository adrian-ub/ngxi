import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiImageCircleSolidIcon],svg[mynaui-image-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.75 9a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path d="M20.16 10.78c-5.667-.42-10.375 3.7-10.41 9.16c.715.202 1.47.31 2.25.31a8.25 8.25 0 0 0 8.16-9.47M8.268 19.36c.06-1.046.268-2.043.603-2.974c-1.082-1.593-2.886-2.639-4.935-2.636a8.26 8.26 0 0 0 4.332 5.61M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m4-3a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 0 0-5.5 0m1.5 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path></svg:g>`,
})
export class MynauiImageCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
