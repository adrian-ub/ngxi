import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBluetoothConnectedIcon],svg[material-symbols-bluetooth-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22v-7.6L6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5L11 9.6V2h1l5.7 5.7l-4.3 4.3l4.3 4.3L12 22zm2-12.4l1.9-1.9L13 5.85zm0 8.55l1.9-1.85l-1.9-1.9zM5 13.5q-.625 0-1.062-.437T3.5 12t.438-1.062T5 10.5t1.063.438T6.5 12t-.437 1.063T5 13.5m14 0q-.625 0-1.062-.437T17.5 12t.438-1.062T19 10.5t1.063.438T20.5 12t-.437 1.063T19 13.5"></svg:path>`,
})
export class MaterialSymbolsBluetoothConnectedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
