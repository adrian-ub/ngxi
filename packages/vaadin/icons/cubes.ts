import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCubesIcon],svg[vaadin-cubes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6V2L8 0L4 2v4L0 8v5l4 2l4-2l4 2l4-2V8zM8.09 1.12L11 2.56l-2.6 1.3l-2.91-1.44zM5 2.78l3 1.5v3.6l-3-1.5zm-1 11.1l-3-1.5v-3.6l3 1.5zm.28-4L1.4 8.42L4 7.12l2.88 1.44zm7.72 4l-3-1.5v-3.6l3 1.5zm.28-4L9.4 8.42l2.6-1.3l2.88 1.44z"></svg:path>`,
})
export class VaadinCubesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
