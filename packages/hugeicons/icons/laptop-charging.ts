import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLaptopChargingIcon],svg[hugeicons-laptop-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 14.5v-8c0-1.886 0-2.828-.586-3.414S17.886 2.5 16 2.5H8c-1.886 0-2.828 0-3.414.586S4 4.614 4 6.5v8m-.502 1.015L4.02 14.5h15.932l.55 1.015c1.443 2.662 1.803 3.993 1.254 4.989s-2.002.996-4.91.996H7.154c-2.909 0-4.363 0-4.911-.996c-.549-.996-.19-2.327 1.254-4.989"></svg:path><svg:path d="m12.463 6l-1.394 1.812a.33.33 0 0 0 .2.526l1.461.31a.33.33 0 0 1 .177.553L11.177 11"></svg:path></svg:g>`,
})
export class HugeiconsLaptopChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
