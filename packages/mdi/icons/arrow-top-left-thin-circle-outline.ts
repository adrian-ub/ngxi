import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowTopLeftThinCircleOutlineIcon],svg[mdi-arrow-top-left-thin-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.97c4.41 0 8.03 3.62 8.03 8.03s-3.62 8.03-8.03 8.03S3.97 16.41 3.97 12S7.59 3.97 12 3.97M12 2C6.46 2 2 6.46 2 12s4.46 10 10 10s10-4.46 10-10S17.54 2 12 2m-1.88 9.53L8 13.64V8h5.64l-2.11 2.12l4.97 4.98l-1.4 1.4"></svg:path>`,
})
export class MdiArrowTopLeftThinCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
