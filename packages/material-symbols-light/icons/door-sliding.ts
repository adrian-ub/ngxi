import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDoorSlidingIcon],svg[material-symbols-light-door-sliding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.73 12.77q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.23t-.539.23t-.23.54t.23.54t.54.23m4.538 0q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.23t-.54.23t-.229.54t.23.54t.54.23M4.5 20v-1h1V5.616q0-.667.475-1.141T7.115 4h4.5v15h.77V4h4.496q.675 0 1.147.475q.472.474.472 1.14V19h1v1z"></svg:path>`,
})
export class MaterialSymbolsLightDoorSlidingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
