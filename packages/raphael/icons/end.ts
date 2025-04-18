import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[raphaelEndIcon],svg[raphael-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.167 5.5v8.18L6.684 5.32v20.364l14.483-8.364v8.18H25.5v-20z"></svg:path>`,
})
export class RaphaelEndIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
