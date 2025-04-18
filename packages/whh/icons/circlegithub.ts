import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCirclegithubIcon],svg[whh-circlegithub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M639 1007q0-1 .5-3.5t.5-4.5q0-85-19.5-171T566 701q130-11 198-76.5T832 455q0-91-64-140v-91q0-11-11-21.5T736 192q-12 0-119 70q-47-6-105-6q-57 0-105 6q-107-70-119-70q-10 0-21 11t-11 21q0 9-2 44t-3 51q-59 48-59 136q0 104 68 169.5T458 701q-5 7-14 20q-43 47-124 47q-16 0-32-13.5t-31.5-32T224 685t-42-32t-54-13q0 8 9.5 20t26.5 33t28 43q26 50 54 73t74 23q48 0 87-14q-23 88-23 181v4l1 4q-168-43-276.5-180.5T0 512q0-105 40.5-199.5t109-163T313 40.5T512 0t199 40.5t163.5 109t109 163T1024 512q0 177-108.5 314.5T639 1007"></svg:path>`,
})
export class WhhCirclegithubIcon {
  readonly viewBox = input("0 0 1024 1007")
  readonly width = input("1.02em")
  readonly height = input("1em")
}
