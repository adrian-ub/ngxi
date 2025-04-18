import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPetrolPumpIcon],svg[hugeicons-petrol-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.25 15.572v5.5h.25c.41 0 .75.34.75.75s-.34.75-.75.75h-14c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.25V8.823c0-2.94 0-4.55 1.1-5.65s2.62-1.1 5.65-1.1s4.55 0 5.65 1.1s1.1 2.72 1.1 5.65v5.25h.25c1.52 0 2.75 1.23 2.75 2.75v.5c0 .41.34.75.75.75s.75-.34.75-.75v-5.19l-.19-.19c-.52-.51-.81-1.2-.81-1.94v-1.86l-1.78-1.78a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2l.41.41c.52.51.81 1.2.81 1.94v7.67c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25v-.5c0-.69-.56-1.25-1.25-1.25zm-1.5-.75v-3.25H4.25v9.5h10.5zm0-4.75v-1.25c0-2.62 0-3.93-.66-4.59s-1.97-.66-4.59-.66s-3.93 0-4.59.66s-.66 1.97-.66 4.59v1.25z" color="currentColor"></svg:path>`,
})
export class HugeiconsPetrolPumpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
