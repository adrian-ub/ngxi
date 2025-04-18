import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGlobeLightOutlineIcon],svg[mdi-globe-light-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8.08V2h-2v6.08c-3.39.49-6 3.39-6 6.92c0 3.87 3.13 7 7 7s7-3.13 7-7c0-3.53-2.61-6.43-6-6.92M12 20c-2.76 0-5-2.24-5-5c0-1.13.39-2.16 1.03-3h7.94c.64.84 1.03 1.87 1.03 3c0 2.76-2.24 5-5 5"></svg:path>`,
})
export class MdiGlobeLightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
