import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLayersOutlineIcon],svg[teenyicons-layers-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5 1.5l.197-.46a.5.5 0 0 0-.394 0zm-7 3l-.197-.46a.5.5 0 0 0 0 .92zm7 3l-.197.46a.5.5 0 0 0 .394 0zm7-3l.197.46a.5.5 0 0 0 0-.92zm-7 6l-.197.46l.197.084l.197-.084zm0 3l-.197.46l.197.084l.197-.084zM7.303 1.04l-7 3l.394.92l7-3zm-7 3.92l7 3l.394-.92l-7-3zm7.394 3l7-3l-.394-.92l-7 3zm7-3.92l-7-3l-.394.92l7 3zM.303 7.96l7 3l.394-.92l-7-3zm7.394 3l7-3l-.394-.92l-7 3zm-7.394 0l7 3l.394-.92l-7-3zm7.394 3l7-3l-.394-.92l-7 3z"></svg:path>`,
})
export class TeenyiconsLayersOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
