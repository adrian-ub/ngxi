import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsBuildkiteIcon],svg[file-icons-buildkite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 169.844L342.694 256V85.032zM330.694 90.948l-154.031 75.938V337.83l154.03-75.916zm-166.031 75.914L0 85.032V256l164.663 81.807zm178.03 102.602v157.504L512 340.788v-157.48z"></svg:path>`,
})
export class FileIconsBuildkiteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
