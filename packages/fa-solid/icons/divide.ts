import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidDivideIcon],svg[fa-solid-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 352c-35.35 0-64 28.65-64 64s28.65 64 64 64s64-28.65 64-64s-28.65-64-64-64m0-192c35.35 0 64-28.65 64-64s-28.65-64-64-64s-64 28.65-64 64s28.65 64 64 64m192 48H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32"></svg:path>`,
})
export class FaSolidDivideIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
