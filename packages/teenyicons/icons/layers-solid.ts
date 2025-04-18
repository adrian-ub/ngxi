import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLayersSolidIcon],svg[teenyicons-layers-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.697 1.04a.5.5 0 0 0-.394 0l-7 3a.5.5 0 0 0 0 .92l7 3a.5.5 0 0 0 .394 0l7-3a.5.5 0 0 0 0-.92z"></svg:path><svg:path fill="currentColor" d="M7.5 9.956L.697 7.04l-.394.92L7.5 11.044l7.197-3.084l-.394-.92z"></svg:path><svg:path fill="currentColor" d="m.697 10.04l-.394.92L7.5 14.044l7.197-3.084l-.394-.92L7.5 12.956z"></svg:path>`,
})
export class TeenyiconsLayersSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
