import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBarricadeFillIcon],svg[ph-barricade-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 64H32a16 16 0 0 0-16 16v72a16 16 0 0 0 16 16h24v32a8 8 0 0 0 16 0v-32h112v32a8 8 0 0 0 16 0v-32h24a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16M32 152V92l60 60Zm192 0h-56.69l-72-72H164l60 60z"></svg:path>`,
})
export class PhBarricadeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
