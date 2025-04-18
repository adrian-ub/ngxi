import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsMjmlIcon],svg[file-icons-mjml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M289.643 149.25H62.645c-83.574 0-82.81-119-2-119h225.998c91.665 0 87.667 119 3 119m154.732 51.5H218.376c-80.81 0-81.573 119 2 119h226.999c84.667 0 88.665-119-3-119m-157.732 162.5H60.644c-80.81 0-81.573 119 2 119h226.999c84.667 0 88.665-119-3-119M120 260.25c0-46.017-50.158-74.933-90.068-51.925s-39.91 80.842 0 103.85S120 306.267 120 260.25m392-170.5c0-46.017-50.158-74.933-90.068-51.925s-39.91 80.842 0 103.85S512 135.767 512 89.75m0 332.5c0-46.017-50.158-74.933-90.068-51.925s-39.91 80.842 0 103.85S512 468.267 512 422.25"></svg:path>`,
})
export class FileIconsMjmlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
