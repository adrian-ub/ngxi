import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosHhvmIcon],svg[logos-hhvm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="m131.015 127.065l117.088.003l-117.088 115.396z"></svg:path><svg:path fill="#878787" d="M.002 257.489h116.672L.002 375.955zM.001 120.581L121.948 1l.061 121.501L.001 244.185zm256 12.152v124.388L131.02 381.188V256.832zm-.044-14.864l-117.087-.003L255.957.723z"></svg:path><svg:path fill="#F7852F" d="m121.909 247.908l-113.513-.003L121.909 134.32z"></svg:path>`,
})
export class LogosHhvmIcon {
  readonly viewBox = input("0 0 256 382")
  readonly width = input("0.68em")
  readonly height = input("1em")
}
