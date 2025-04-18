import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNailIcon],svg[mdi-nail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 5v11L12 22l-1.5-6V5zM17 2H7v2h10z"></svg:path>`,
})
export class MdiNailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
