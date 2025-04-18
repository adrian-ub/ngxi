import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidEllipsisVIcon],svg[fa-solid-ellipsis-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72s32.2-72 72-72M24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8S24 40.2 24 80m0 352c0 39.8 32.2 72 72 72s72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72"></svg:path>`,
})
export class FaSolidEllipsisVIcon {
  readonly viewBox = input("0 0 192 512")
  readonly width = input("0.38em")
  readonly height = input("1em")
}
