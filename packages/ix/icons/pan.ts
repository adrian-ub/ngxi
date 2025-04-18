import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPanIcon],svg[ix-pan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.334 298.667V384H320l-64 85.334L192 384h42.667v-85.333zM384 192l85.334 64L384 320v-42.666h-85.333v-42.667H384zm-256 0v42.667h85.334v42.667H128V320l-85.333-64zM256 42.667L320 128h-42.666v85.334h-42.667V128H192z"></svg:path>`,
})
export class IxPanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
