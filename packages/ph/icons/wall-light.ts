import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phWallLightIcon],svg[ph-wall-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 50H32a6 6 0 0 0-6 6v144a6 6 0 0 0 6 6h192a6 6 0 0 0 6-6V56a6 6 0 0 0-6-6M86 146v-36h84v36Zm-48 0v-36h36v36Zm144-36h36v36h-36Zm36-12h-84V62h84Zm-96-36v36H38V62Zm-84 96h84v36H38Zm96 36v-36h84v36Z"></svg:path>`,
})
export class PhWallLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
