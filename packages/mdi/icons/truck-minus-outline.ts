import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTruckMinusOutlineIcon],svg[mdi-truck-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.7 1.3 3 3 3s3-1.3 3-3h6c0 1.7 1.3 3 3 3s3-1.3 3-3h2v-5zM6 18.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m9-3.5H8.2c-.5-.6-1.3-1-2.2-1s-1.7.4-2.2 1H3V6h12zm3 3.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5M17 12V9.5h2.5l2 2.5zM6 11V9h6v2z"></svg:path>`,
})
export class MdiTruckMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
