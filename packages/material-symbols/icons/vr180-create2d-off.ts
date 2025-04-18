import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVr180Create2dOffIcon],svg[material-symbols-vr180-create2d-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 17.75q-2.675-.675-4.337-2.838T2 10q0-1.125.3-2.15t.825-1.925l-2.5-2.5l1.4-1.4L21.2 21.2l-1.4 1.4l-.6-.6H12q-.825 0-1.412-.587T10 20v-7.2l-1.875-1.85q-.075.275-.1.525T8 12zM10 2q2.75 0 4.913 1.663T17.75 8H12q-.275 0-.525.025t-.525.1l-5-5.025q.925-.55 1.95-.825T10 2m2.825 8H20q.825 0 1.413.588T22 12v7.175zm3.375 9l-.7-.725l-1.425-1.4L12.5 19z"></svg:path>`,
})
export class MaterialSymbolsVr180Create2dOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
