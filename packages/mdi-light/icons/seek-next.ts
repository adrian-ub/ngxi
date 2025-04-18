import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightSeekNextIcon],svg[mdi-light-seek-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.402 12.5L5 6v13l1-.625l9.402-5.875Zm-1.887 0L6 17.196V7.804l7.515 4.696ZM18 6h-1v13h1V6Z"></svg:path>`,
})
export class MdiLightSeekNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
