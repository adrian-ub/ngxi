import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStepIntoRoundedIcon],svg[material-symbols-step-into-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-1.25 0-2.125-.875T9 19t.875-2.125T12 16t2.125.875T15 19t-.875 2.125T12 22m-1-11.825V3q0-.425.288-.712T12 2t.713.288T13 3v7.175L14.875 8.3q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L12.7 13.3q-.3.3-.7.3t-.7-.3L7.7 9.7q-.275-.275-.288-.687T7.7 8.3q.275-.275.7-.275t.7.275z"></svg:path>`,
})
export class MaterialSymbolsStepIntoRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
