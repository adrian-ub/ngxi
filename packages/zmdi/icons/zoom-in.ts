import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiZoomInIcon],svg[zmdi-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m267 235l106 106l-32 32l-106-106v-17l-6-6q-39 33-90 33q-58 0-98.5-40.5T0 138.5t40.5-98t98-40.5t98 40.5T277 139q0 51-33 90l6 6zm-128 0q40 0 68-28t28-68t-28-68t-68-28t-68 28t-28 68t28 68t68 28m53-86h-43v43h-21v-43H85v-21h43V85h21v43h43z"></svg:path>`,
})
export class ZmdiZoomInIcon {
  readonly viewBox = input("0 0 376 384")
  readonly width = input("0.98em")
  readonly height = input("1em")
}
