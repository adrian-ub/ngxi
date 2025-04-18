import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFleksyIcon],svg[arcticons-fleksy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="24" r="21.5"></svg:circle><svg:circle cx="24" cy="24" r="21.5"></svg:circle><svg:circle cx="24" cy="24" r="21.5"></svg:circle><svg:circle cx="24" cy="24" r="21.5"></svg:circle><svg:circle cx="24" cy="13.704" r="5.704"></svg:circle><svg:circle cx="34.296" cy="24" r="5.704"></svg:circle><svg:circle cx="24" cy="34.296" r="5.704"></svg:circle><svg:circle cx="13.704" cy="24" r="5.704"></svg:circle><svg:path d="M29.825 20.478A5.7 5.7 0 0 0 28.593 24a5.7 5.7 0 0 0 1.232 3.523l2.503-2.504a1.44 1.44 0 0 0 0-2.038zM24 28.593a5.7 5.7 0 0 0-3.522 1.232l2.503 2.503a1.44 1.44 0 0 0 2.038 0l2.51-2.51A5.7 5.7 0 0 0 24 28.594Zm-5.819-8.122l-2.51 2.51a1.44 1.44 0 0 0 0 2.038l2.504 2.503A5.7 5.7 0 0 0 19.408 24a5.7 5.7 0 0 0-1.227-3.529M24 15.248c-.369 0-.737.141-1.02.424l-2.503 2.503A5.7 5.7 0 0 0 24 19.407a5.7 5.7 0 0 0 3.523-1.232l-2.504-2.503A1.44 1.44 0 0 0 24 15.248"></svg:path></svg:g>`,
})
export class ArcticonsFleksyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
