import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowTopRightThinCircleOutlineIcon],svg[mdi-arrow-top-right-thin-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.97c-4.41 0-8.03 3.62-8.03 8.03s3.62 8.03 8.03 8.03s8.03-3.62 8.03-8.03S16.41 3.97 12 3.97M12 2c5.54 0 10 4.46 10 10s-4.46 10-10 10S2 17.54 2 12S6.46 2 12 2m1.88 9.53L16 13.64V8h-5.64l2.11 2.12L7.5 15.1l1.4 1.4"></svg:path>`,
})
export class MdiArrowTopRightThinCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
