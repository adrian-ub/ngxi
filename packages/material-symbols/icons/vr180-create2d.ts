import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVr180Create2dIcon],svg[material-symbols-vr180-create2d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-.825 0-1.412-.587T10 20v-8q0-.825.588-1.412T12 10h8q.825 0 1.413.588T22 12v8q0 .825-.587 1.413T20 22zm.5-3h7l-2.3-3l-1.7 2.25l-1.2-1.65zM8 17.75q-2.675-.675-4.337-2.838T2 10q0-3.35 2.325-5.675T10 2q2.75 0 4.913 1.662T17.75 8H12q-1.65 0-2.825 1.175T8 12z"></svg:path>`,
})
export class MaterialSymbolsVr180Create2dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
