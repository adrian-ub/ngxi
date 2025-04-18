import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosHackIcon],svg[logos-hack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="m131.015 126.065l117.088.003l-117.088 115.396z"></svg:path><svg:path fill="#868686" d="M.002 256.489h116.672L.002 374.955zM.001 119.581L121.948 0l.061 121.501L.001 243.185zm256 12.152v124.388L131.02 380.188V255.832z"></svg:path><svg:path fill="#F7852F" d="m121.909 246.908l-113.513-.003L121.909 133.32z"></svg:path>`,
})
export class LogosHackIcon {
  readonly viewBox = input("0 0 256 381")
  readonly width = input("0.68em")
  readonly height = input("1em")
}
