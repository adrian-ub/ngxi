import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEggOutlineIcon],svg[mdi-egg-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4c2.32 0 5.5 6.7 5.5 10.5c0 3.03-2.47 5.5-5.5 5.5s-5.5-2.47-5.5-5.5C6.5 10.7 9.68 4 12 4m0-2c-4.14 0-7.5 8.36-7.5 12.5S7.86 22 12 22s7.5-3.36 7.5-7.5S16.14 2 12 2"></svg:path>`,
})
export class MdiEggOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
