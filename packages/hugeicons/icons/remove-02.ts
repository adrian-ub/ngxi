import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRemove02Icon],svg[hugeicons-remove-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12c0-.581 0-.872.058-1.11c.156-.647.61-1.153 1.193-1.326c.214-.064.476-.064.999-.064h13.5c.523 0 .785 0 1 .064c.582.173 1.037.679 1.192 1.326c.058.238.058.529.058 1.11s0 .872-.058 1.11c-.155.647-.61 1.153-1.193 1.326c-.214.064-.476.064-.999.064H5.25c-.523 0-.785 0-1-.064c-.582-.173-1.036-.679-1.192-1.326C3 12.872 3 12.581 3 12" color="currentColor"></svg:path>`,
})
export class HugeiconsRemove02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
