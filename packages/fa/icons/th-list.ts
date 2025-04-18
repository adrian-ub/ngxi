import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faThListIcon],svg[fa-th-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1120v192q0 40-28 68t-68 28H96q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68m0-512v192q0 40-28 68t-68 28H96q-40 0-68-28T0 800V608q0-40 28-68t68-28h320q40 0 68 28t28 68m1280 512v192q0 40-28 68t-68 28H736q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68M512 96v192q0 40-28 68t-68 28H96q-40 0-68-28T0 288V96q0-40 28-68T96 0h320q40 0 68 28t28 68m1280 512v192q0 40-28 68t-68 28H736q-40 0-68-28t-28-68V608q0-40 28-68t68-28h960q40 0 68 28t28 68m0-512v192q0 40-28 68t-68 28H736q-40 0-68-28t-28-68V96q0-40 28-68t68-28h960q40 0 68 28t28 68"></svg:path>`,
})
export class FaThListIcon {
  readonly viewBox = input("0 0 1792 1408")
  readonly width = input("1.28em")
  readonly height = input("1em")
}
