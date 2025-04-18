import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiAnticlockwiseTriangleHeadedTopUShapedArrowIcon],svg[openmoji-anticlockwise-triangle-headed-top-u-shaped-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3f3f3f" d="m50.166 50.524l9.6-10.4l4.1 3.8l-16.5 17.8l-16.5-17.8l4.1-3.8l9.6 9.98l-.004-14.694c0-9.805-3.999-15.24-14.522-15.24c-10.708 0-14.21 6.761-14.21 15.24v22.799h-5.38V35.38c0-12.4 6.315-20.59 19.59-20.59c13.5 0 20.125 8.09 20.125 20.59Z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m50.166 50.524l9.6-10.4l4.1 3.8l-16.5 17.8l-16.5-17.8l4.1-3.8l9.6 9.98l-.004-14.694c0-9.805-3.999-15.24-14.522-15.24c-10.708 0-14.21 6.761-14.21 15.24v22.799h-5.38V35.38c0-12.4 6.315-20.59 19.59-20.59c13.5 0 20.125 8.09 20.125 20.59Z"></svg:path>`,
})
export class OpenmojiAnticlockwiseTriangleHeadedTopUShapedArrowIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
