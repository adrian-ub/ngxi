import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilBluetoothIcon],svg[pepicons-pencil-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m11.232 10.398l5.571-4.25a.5.5 0 0 0 0-.796l-5.571-4.25a.5.5 0 0 0-.803.398V10a.5.5 0 0 0 .803.398m.197-1.408V2.51l4.247 3.24z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m11.232 18.898l5.571-4.25a.5.5 0 0 0 0-.796l-5.571-4.25a.5.5 0 0 0-.803.398v8.5a.5.5 0 0 0 .803.398m.197-7.888l4.247 3.24l-4.247 3.24z" clip-rule="evenodd"></svg:path><svg:path d="M11.228 9.6a.5.5 0 1 1-.598.8L3.665 5.207a.5.5 0 1 1 .598-.801z"></svg:path><svg:path d="M11.228 10.4a.5.5 0 1 0-.598-.8l-6.965 5.194a.5.5 0 0 0 .598.801z"></svg:path></svg:g>`,
})
export class PepiconsPencilBluetoothIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
