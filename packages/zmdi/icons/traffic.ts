import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiTrafficIcon],svg[zmdi-traffic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 149q0 30-18 52.5T277 232v24h64q0 29-18 52t-46 30v25q0 8-6 14.5t-15 6.5H85q-8 0-14.5-6.5T64 363v-25q-28-7-46-30T0 256h64v-24q-28-8-46-30.5T0 149h64v-24q-28-7-46-30T0 43h64V21q0-8 6.5-14.5T85 0h171q9 0 15 6.5t6 14.5v22h64q0 29-18 52t-46 30v24zM170.5 341q17.5 0 30-12.5t12.5-30t-12.5-30t-30-12.5t-30 12.5t-12.5 30t12.5 30t30 12.5m0-106q17.5 0 30-12.5T213 192t-12.5-30.5t-30-12.5t-30 12.5T128 192t12.5 30.5t30 12.5m0-107q17.5 0 30-12.5t12.5-30t-12.5-30t-30-12.5t-30 12.5t-12.5 30t12.5 30t30 12.5"></svg:path>`,
})
export class ZmdiTrafficIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}
