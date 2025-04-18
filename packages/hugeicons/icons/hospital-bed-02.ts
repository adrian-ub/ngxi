import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHospitalBed02Icon],svg[hugeicons-hospital-bed-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.59 6H4.41c-.233 0-.35 0-.459.017c-.502.076-.963.41-1.289.933c-.07.114-.135.245-.264.507c-.2.404-.3.607-.34.761c-.196.742.124 1.551.689 1.742c.118.04.297.04.657.04h17.192c.36 0 .54 0 .657-.04c.565-.19.885-1 .69-1.742c-.042-.154-.141-.357-.34-.761c-.13-.262-.194-.393-.265-.507c-.326-.523-.787-.857-1.29-.933C19.94 6 19.824 6 19.59 6M7.5 17.5L19 10m-2.5 7.5L5 10m3 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m12 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0M6 6V4.104c0-.718.611-1.245 1.243-1.07l2 .551c.445.123.757.564.757 1.07V6" color="currentColor"></svg:path>`,
})
export class HugeiconsHospitalBed02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
