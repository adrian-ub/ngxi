import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCancelScheduleSendIcon],svg[material-symbols-light-cancel-schedule-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.052 18.917l1.75-1.75l1.75 1.75l.558-.557l-1.744-1.744l1.75-1.75l-.558-.558l-1.75 1.75l-1.75-1.75l-.558.558l1.75 1.75l-1.75 1.75zm-10.86-.378v-5.193L10.04 12l-5.847-1.346v-5.27l12.281 5.25h-.07q-2.116.174-3.702 1.553t-1.778 3.46zm12.616 2.077q-1.671 0-2.836-1.165q-1.164-1.164-1.164-2.835t1.164-2.836t2.836-1.164q1.67 0 2.835 1.164t1.165 2.836q0 1.67-1.165 2.835t-2.835 1.165"></svg:path>`,
})
export class MaterialSymbolsLightCancelScheduleSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
