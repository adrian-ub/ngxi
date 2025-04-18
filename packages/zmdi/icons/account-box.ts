import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiAccountBoxIcon],svg[zmdi-account-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 43q0-18 12.5-30.5T43 0h298q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341zm256 85q0-27-18.5-45.5T192 64t-45.5 18.5T128 128t18.5 45.5T192 192t45.5-18.5T256 128M64 299v21h256v-21q0-20-23.5-36T244 240t-52-7t-52 7t-52.5 23T64 299"></svg:path>`,
})
export class ZmdiAccountBoxIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
