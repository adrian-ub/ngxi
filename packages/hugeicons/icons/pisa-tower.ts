import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPisaTowerIcon],svg[hugeicons-pisa-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 21h20m-5.54-4.582l1.288-5.022m-1.289 5.022l.962.27m-.962-.27L15.283 21m1.176-4.582L7.8 13.996m9.95-2.6l1.289-5.022m-1.29 5.022l.963.269m-.963-.27l-8.66-2.421m9.95-2.6l-1.925-.538m1.925.538l.962.269M7.798 13.996l1.29-5.022m-1.29 5.022l-.962-.27m.962.27L6 21M9.087 8.974l1.29-5.022m-1.29 5.022l-.962-.27m2.252-4.752l-.963-.27m.963.27l1.924.538m0 0l4.812 1.346M12.301 4.49l.445-1.732a1 1 0 0 1 1.234-.721l2.883.806c.527.148.84.695.702 1.23l-.452 1.763M10.5 21l.56-2M14 8.5l-.478 1.708m-1.41 5.034l.454-1.619" color="currentColor"></svg:path>`,
})
export class HugeiconsPisaTowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
