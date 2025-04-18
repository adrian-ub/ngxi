import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBus1Icon],svg[lineicons-bus-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 14.438a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m8.75-1.25a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path fill="currentColor" d="M7.625 2.625a3.75 3.75 0 0 0-3.662 2.938h-.088a1.5 1.5 0 0 0-1.5 1.5v.75c0 .414.336.75.75.75h.75v8.062c0 .725.343 1.37.875 1.781v1.469a1.5 1.5 0 0 0 3 0v-1h8.5v1a1.5 1.5 0 0 0 3 0v-1.469a2.25 2.25 0 0 0 .875-1.781V8.563h.75a.75.75 0 0 0 .75-.75v-.75a1.5 1.5 0 0 0-1.5-1.5h-.088a3.75 3.75 0 0 0-3.662-2.938zm11 3.75V10H5.375V6.375a2.25 2.25 0 0 1 2.25-2.25h8.75a2.25 2.25 0 0 1 2.25 2.25m-.75 11H6.125a.75.75 0 0 1-.75-.75V11.5h13.25v5.125a.75.75 0 0 1-.75.75"></svg:path>`,
})
export class LineiconsBus1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
