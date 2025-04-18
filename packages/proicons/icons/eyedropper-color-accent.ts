import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsEyedropperColorAccentIcon],svg[proicons-eyedropper-color-accent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.941 19.968l6.109-6.108H6.235l-2.202 2.202c-.205.205-.308.307-.387.425a1.5 1.5 0 0 0-.171.335c-.048.134-.07.277-.116.563l-.096.608c-.173 1.1-.26 1.65-.087 2.05c.151.35.43.629.78.78c.399.174.949.087 2.05-.085l.61-.096c.286-.044.43-.067.563-.115q.18-.065.337-.17c.117-.08.22-.183.425-.389"></svg:path>`,
})
export class ProiconsEyedropperColorAccentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
