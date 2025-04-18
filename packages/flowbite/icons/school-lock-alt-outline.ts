import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteSchoolLockAltOutlineIcon],svg[flowbite-school-lock-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.357 11l5-6l3.333 4m-8.333 2h-3v8h7m-4-8h-4l3-4h4.337zm8.331-2L14.02 7h4.337l1.5 2m-8.324 5.898a2 2 0 1 1 1.502-3.708M16.357 15v-2.5a1.5 1.5 0 0 1 3 0V15m-4 0h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1"></svg:path>`,
})
export class FlowbiteSchoolLockAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
