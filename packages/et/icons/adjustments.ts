import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[etAdjustmentsIcon],svg[et-adjustments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M31 0H2c-.822 0-2 1.178-2 2v28c0 .822 1.178 2 2 2h29c.822 0 2-1.178 2-2V2c0-.822-1.178-2-2-2m1 30c-.006.284-.716.994-1 1H2c-.284-.006-.994-.716-1-1V2c.006-.284.716-.994 1-1h29c.284.006.994.716 1 1z"></svg:path><svg:path d="M16.5 5.5c-1.103 0-2 .897-2 2s.897 2 2 2s2-.897 2-2s-.897-2-2-2m0 3c-.551 0-1-.449-1-1s.449-1 1-1s1 .449 1 1s-.449 1-1 1m8 13c-1.103 0-2 .897-2 2s.897 2 2 2s2-.897 2-2s-.897-2-2-2m0 3c-.551 0-1-.449-1-1s.449-1 1-1s1 .449 1 1s-.449 1-1 1m-16-8c-1.103 0-2 .897-2 2s.897 2 2 2s2-.897 2-2s-.897-2-2-2m0 3c-.551 0-1-.449-1-1s.449-1 1-1s1 .449 1 1s-.449 1-1 1m0-4.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-1 0v9a.5.5 0 0 0 .5.5m0 7a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5m8-11a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 1 0v-14a.5.5 0 0 0-.5-.5m8 9a.5.5 0 0 0 .5-.5v-14a.5.5 0 0 0-1 0v14a.5.5 0 0 0 .5.5"></svg:path></svg:g>`,
})
export class EtAdjustmentsIcon {
  readonly viewBox = input("0 0 33 32")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
