import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riScales3LineIcon],svg[ri-scales-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.999 2l-.001 1.278l5 1.668l3.633-1.21l.632 1.896l-3.031 1.011l3.095 8.512A5.98 5.98 0 0 1 17.998 17a5.98 5.98 0 0 1-4.328-1.845l3.094-8.512l-3.766-1.256V19h4v2h-10v-2h4V5.387L7.232 6.643l3.095 8.512A5.98 5.98 0 0 1 6 17a5.98 5.98 0 0 1-4.33-1.845l3.095-8.512l-3.03-1.01l.632-1.898L6 4.945l4.999-1.667V2zm5 7.103l-1.959 5.386a4 4 0 0 0 1.959.511c.7 0 1.37-.18 1.958-.51zm-12 0L4.04 14.489A4 4 0 0 0 5.999 15c.7 0 1.37-.18 1.958-.51z"></svg:path>`,
})
export class RiScales3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
