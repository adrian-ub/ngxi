import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHeadsetOffIcon],svg[material-symbols-headset-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18.15L14.85 12H19v-1q0-2.95-2.05-4.975T12 4q-1.1 0-2.087.312T8.1 5.2L6.65 3.8q1.125-.875 2.487-1.338T12 2q1.85 0 3.488.7t2.862 1.925t1.938 2.863T21 11zM12 23v-2h6.175l-1-1H15v-2.175L5.525 8.35q-.225.6-.375 1.288T5 11v1h4v8H5q-.825 0-1.412-.587T3 18v-7q0-1.125.263-2.175t.762-2L.675 3.5L2.1 2.1l19.775 19.8V23z"></svg:path>`,
})
export class MaterialSymbolsHeadsetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
