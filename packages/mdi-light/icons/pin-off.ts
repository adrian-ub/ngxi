import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightPinOffIcon],svg[mdi-light-pin-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.79 4.46l.71-.71L20.25 20.5l-.71.71L14.33 16H12v4.5l-.5 1.5l-.5-1.5V16H6v-2l2-2V9.66zM14 12.41V5h1V4H8v1h1v2.84l-1-1V6h-.84L7 5.84V3h9v3h-1v6l2 2v1.83l-1-.99v-.43zm-5 0l-2 2V15h6.34L9 10.66z"></svg:path>`,
})
export class MdiLightPinOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
