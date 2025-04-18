import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDevicesOffOutlineIcon],svg[material-symbols-devices-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.85 6l-2-2H21v2zM22 19l-2-2v-7h-4v3.15l-2-2V9q0-.425.288-.712T15 8h6q.425 0 .713.288T22 9zm-2.2 3.6L17.2 20H15q-.425 0-.712-.288T14 19v-2.2l-8-8V17h6v3H2v-3h2V6.8L1.4 4.2l1.4-1.4l18.4 18.4zM18 15.075"></svg:path>`,
})
export class MaterialSymbolsDevicesOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
