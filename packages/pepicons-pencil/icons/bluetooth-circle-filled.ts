import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilBluetoothCircleFilledIcon],svg[pepicons-pencil-bluetooth-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilBluetoothCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="m14.232 13.398l5.571-4.25a.5.5 0 0 0 0-.796l-5.571-4.25a.5.5 0 0 0-.803.398V13a.5.5 0 0 0 .803.398m.197-1.408V5.51l4.247 3.24z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="m14.232 21.898l5.571-4.25a.5.5 0 0 0 0-.796l-5.571-4.25a.5.5 0 0 0-.803.398v8.5a.5.5 0 0 0 .803.398m.197-7.888l4.247 3.24l-4.247 3.24z" clip-rule="evenodd"></svg:path><svg:path d="M14.228 12.6a.5.5 0 1 1-.598.8L6.665 8.207a.5.5 0 1 1 .598-.801z"></svg:path><svg:path d="M14.228 13.4a.5.5 0 1 0-.598-.8l-6.965 5.194a.5.5 0 0 0 .598.801z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilBluetoothCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilBluetoothCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
