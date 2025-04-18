import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSorting19Icon],svg[hugeicons-sorting-19-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 10V3.947c0-.574 0-.862-.23-.933c-.507-.157-1.27.984-1.27.984m1.5 6H5.5M7 10h1.5m.5 7.5v-1.75c0-.826 0-1.238-.293-1.495C8.414 14 7.943 14 7 14s-1.414 0-1.707.256S5 14.925 5 15.75s0 1.238.293 1.494s.764.256 1.707.256zm0 0v.874c0 1.238 0 1.856-.44 2.24C8.122 21 7.415 21 6 21H5m11.5-1V4m0 16c-.7 0-2.008-1.995-2.5-2.5m2.5 2.5c.7 0 2.009-1.995 2.5-2.5" color="currentColor"></svg:path>`,
})
export class HugeiconsSorting19Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
