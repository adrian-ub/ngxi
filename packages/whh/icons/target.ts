import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTargetIcon],svg[whh-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m0 704q-87 0-160.5-43T235 672.5T192 512t43-160.5T351.5 235T512 192t160.5 43T789 351.5T832 512t-43 160.5T672.5 789T512 832m-.5-512Q432 320 376 376t-56 136t56 136t136 56t136-56t56-136t-56.5-136t-136-56m.5 320q-53 0-90.5-37.5T384 512t37.5-90.5T512 384t90.5 37.5T640 512t-37.5 90.5T512 640"></svg:path>`,
})
export class WhhTargetIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
