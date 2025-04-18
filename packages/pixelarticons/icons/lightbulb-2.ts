import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsLightbulb2Icon],svg[pixelarticons-lightbulb-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8v2H8zM6 6V4h2v2zm0 6H4V6h2zm2 2H6v-2h2zm2 0H8v4h8v-4h2v-2h2V6h-2V4h-2v2h2v6h-2v2h-2v2h-4zm2-2v2h-2v-2zm0-2h2v2h-2zm0-2v2h-2V8zm0 0V6h2v2zm4 14v-2H8v2z"></svg:path>`,
})
export class PixelarticonsLightbulb2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
