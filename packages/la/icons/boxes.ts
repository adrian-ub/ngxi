import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBoxesIcon],svg[la-boxes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4v11h12V4zm2 2h2v4l2-2l2 2V6h2v7h-8zM3 17v11h12V17zm14 0v11h12V17zM5 19h2v4l2-2l2 2v-4h2v7H5zm14 0h2v4l2-2l2 2v-4h2v7h-8z"></svg:path>`,
})
export class LaBoxesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
