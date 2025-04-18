import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elBulbIcon],svg[el-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M600 119.608c-158.775 0-287.486 96.415-287.486 215.368l163.322 494.645h248.328l163.322-494.659c0-118.951-128.702-215.369-287.486-215.369zm0 46.996c158.775 0 240.479 128.138 240.479 168.362L724.161 680.393H475.833L359.515 334.966c0-49.63 81.704-168.362 240.479-168.362zM472.215 865.699v85.982h255.57v-85.984h-255.57zm0 128.725v85.982h255.57v-85.982z"></svg:path>`,
})
export class ElBulbIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
