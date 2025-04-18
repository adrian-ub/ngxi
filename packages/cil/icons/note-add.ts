import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilNoteAddIcon],svg[cil-note-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 24v472h294.627L496 318.627V24Zm32 32h408v216H272v192H56Zm249.373 408H304V304h160v1.373Z"></svg:path><svg:path fill="currentColor" d="M208 288v-80h80v-32h-80V96h-32v80H96v32h80v80z"></svg:path>`,
})
export class CilNoteAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
