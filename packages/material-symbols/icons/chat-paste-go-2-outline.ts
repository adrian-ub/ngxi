import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsChatPasteGo2OutlineIcon],svg[material-symbols-chat-paste-go-2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 21l-1.4-1.4l1.575-1.6H14v-2h4.175L16.6 14.4L18 13l4 4zM3 21V6q0-.825.588-1.412T5 4h12q.825 0 1.413.588T19 6v5.075q-.25-.05-.5-.062T18 11t-.5.013t-.5.062V6H5v10h7.075q-.05.25-.062.5T12 17t.013.5t.062.5H6zm2-5V6z"></svg:path>`,
})
export class MaterialSymbolsChatPasteGo2OutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
