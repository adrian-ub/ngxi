import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DoubleColumnEditIcon],svg[fluent-mdl2-double-column-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1152 1282l-128 129V256h896v490q-18-3-36-5t-36-2q-14 0-28 1t-28 4V384h-640zm-256 257l-50 51l-51 202H0V256h896zM768 384H128v1280h640zm1080 512q42 0 78 15t64 42t42 63t16 78q0 39-15 76t-43 65l-717 719l-377 94l94-377l717-718q28-28 65-42t76-15m51 249q21-21 21-51q0-31-20-50t-52-20q-14 0-27 4t-23 15l-692 694l-34 135l135-34z"></svg:path>`,
})
export class FluentMdl2DoubleColumnEditIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
