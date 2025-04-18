import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhElggIcon],svg[whh-elgg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 832q122 0 212.5-71T832 576q0-40 28-68t68-28t68 28t28 68q0 93-44.5 177.5t-116 143t-164 93T512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0q134 0 256 72t192 184q13 24 16.5 46t-8 44.5T928 384L462 628q-34 19-72 9t-57.5-42.5t-9-69T367 470l371-183q-94-95-226-95q-87 0-160.5 43T235 351.5T192 512t43 160.5T351.5 789T512 832"></svg:path>`,
})
export class WhhElggIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
