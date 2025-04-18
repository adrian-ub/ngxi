import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiShoppingCartIcon],svg[openmoji-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path fill="#D0CFCE" d="M51.903 18.602v23.755H15.015l-3.666-23.755z"></svg:path><svg:circle cx="50.142" cy="58.463" r="2.375" fill="#D0CFCE"></svg:circle><svg:circle cx="14.035" cy="58.463" r="2.375" fill="#D0CFCE"></svg:circle><svg:path fill="#9B9B9A" d="M45.664 23.644v.79m0 12.319v.79m-5.376-13.899v.79m0 12.319v.79m-5.376-13.899v.79m0 12.319v.79m-5.375-13.899v.79m0 12.319v.79m-5.376-13.899v.79m0 12.319v.79m-5.376-13.899v.79m0 12.319v.79m26.879-7.544v.79m-5.376-.79v.79m-5.376-.79v.79m-5.375-.79v.79m-5.376-.79v.79m-5.376-.79v.79"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M51.903 18.602v23.755H15.015l-3.666-23.755zm0 0l3.603-7.523h5.145M14.035 51.861h37.871"></svg:path><svg:circle cx="50.142" cy="58.463" r="2.375"></svg:circle><svg:circle cx="14.035" cy="58.463" r="2.375"></svg:circle><svg:path d="M51.903 42.357s4.842.355 4.842 4.787c0 5.122-4.583 4.712-4.583 4.712m-6.498-28.212v.79m0 12.319v.79m-5.376-13.899v.79m0 12.319v.79m-5.376-13.899v.79m0 12.319v.79m-5.375-13.899v.79m0 12.319v.79m-5.376-13.899v.79m0 12.319v.79m-5.376-13.899v.79m0 12.319v.79m26.879-7.544v.79m-5.376-.79v.79m-5.376-.79v.79m-5.375-.79v.79m-5.376-.79v.79m-5.376-.79v.79"></svg:path></svg:g>`,
})
export class OpenmojiShoppingCartIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
