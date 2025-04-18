import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRoboticIcon],svg[hugeicons-robotic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 16v-2c0-2.828 0-4.243-.879-5.121C17.243 8 15.828 8 13 8h-2c-2.828 0-4.243 0-5.121.879C5 9.757 5 11.172 5 14v2c0 2.828 0 4.243.879 5.121C6.757 22 8.172 22 11 22h2c2.828 0 4.243 0 5.121-.879C19 20.243 19 18.828 19 16m0 2c1.414 0 2.121 0 2.56-.44c.44-.439.44-1.146.44-2.56s0-2.121-.44-2.56C21.122 12 20.415 12 19 12M5 18c-1.414 0-2.121 0-2.56-.44C2 17.122 2 16.415 2 15s0-2.121.44-2.56C2.878 12 3.585 12 5 12m8.5-8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M12 5v3m-3 5v1m6-1v1"></svg:path><svg:path d="M10 17.5s.667.5 2 .5s2-.5 2-.5"></svg:path></svg:g>`,
})
export class HugeiconsRoboticIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
