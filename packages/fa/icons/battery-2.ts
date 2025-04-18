import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBattery2Icon],svg[fa-battery-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1024V256h896v768zm1920-704q53 0 90.5 37.5T2304 448v384q0 53-37.5 90.5T2176 960v160q0 66-47 113t-113 47H160q-66 0-113-47T0 1120V160Q0 94 47 47T160 0h1856q66 0 113 47t47 113zm0 512V448h-128V160q0-14-9-23t-23-9H160q-14 0-23 9t-9 23v960q0 14 9 23t23 9h1856q14 0 23-9t9-23V832z"></svg:path>`,
})
export class FaBattery2Icon {
  readonly viewBox = input("0 0 2304 1280")
  readonly width = input("1.8em")
  readonly height = input("1em")
}
