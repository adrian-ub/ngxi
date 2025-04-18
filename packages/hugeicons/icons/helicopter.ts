import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHelicopterIcon],svg[hugeicons-helicopter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14 4v4m.184-.178l-7.132.224c-.716.023-1.073.034-1.38-.102c-.588-.261-.827-.882-1.09-1.428c-.293-.609-.852-.51-1.431-.51c-.614 0-.92 0-1.072.208c-.151.208-.067.514.101 1.127l.057.205c.287 1.04.43 1.561.776 1.935c.345.375.84.546 1.83.888l4.325 1.496c.916.316 1.383.72 1.851 1.594c.722 1.346 1.082 2.02 1.606 2.498c.384.35.829.622 1.31.8c.658.243 1.4.243 2.886.243h3.915c.87 0 1.264-.516 1.264-1.312c0-1.516 0-2.274-.123-2.898c-.5-2.53-2.443-4.485-4.897-4.928c-.605-.109-1.336-.086-2.796-.04"></svg:path><svg:path d="M21.5 13.5H19a5 5 0 0 1-5-5M12 20h2m7 0h-2m0 0l1-3m-1 3h-5m0 0l1-3M11 4h6"></svg:path></svg:g>`,
})
export class HugeiconsHelicopterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
