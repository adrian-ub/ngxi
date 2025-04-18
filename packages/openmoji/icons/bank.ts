import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBankIcon],svg[openmoji-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9B9B9A" d="M16 26h40v34H16z"></svg:path><svg:path fill="#D0CFCE" d="M14 22h44v4H14z"></svg:path><svg:path fill="#FFF" d="M19.5 26h2.052v34H19.5m5.433-34h2.038v34h-2.038m22.134 0h-2.049V26h2.049M52.5 60h-2.018V26H52.5"></svg:path><svg:path fill="#D0CFCE" d="M36 12L19 22h34z"></svg:path><svg:path fill="#92D3F5" d="M31.5 50h9v10h-9z"></svg:path><svg:circle cx="36" cy="35" r="5" fill="#FCEA2B"></svg:circle><svg:path fill="none" stroke="#F4AA41" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M36.948 34.262c-.098-.38-.52-.666-1.027-.666h0c-.579 0-1.048.373-1.048.834s.47.835 1.048.835l-.021.003c.579 0 1.048.374 1.048.835s-.469.835-1.048.835h0c-.507 0-.93-.287-1.027-.667m1.038-2.675V32.8m0 4.933v-.795"></svg:path><svg:g fill="none" stroke="#000" stroke-miterlimit="10"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 26h40v34H16zm-2-4h44v4H14z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.5 26h3v34h-3m5.433-34h3v34h-3m22.134 0h-3V26h3M52.5 60h-3V26h3M36 12l-17 9.749h34zm-4.5 38h9v10h-9zM36 60V50"></svg:path><svg:circle cx="36" cy="35" r="5" stroke-width="2"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36.948 34.262c-.098-.38-.52-.666-1.027-.666h0c-.579 0-1.048.373-1.048.834s.47.835 1.048.835l-.021.003c.579 0 1.048.374 1.048.835s-.469.835-1.048.835h0c-.507 0-.93-.287-1.027-.667m1.038-2.675V32.8m0 4.933v-.795"></svg:path></svg:g>`,
})
export class OpenmojiBankIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
