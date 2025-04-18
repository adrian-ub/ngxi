import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCupOffIcon],svg[mdi-cup-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4.27L2.28 3L21 21.72L19.73 23l-1.46-1.46c-.34.29-.77.46-1.27.46H7a2.02 2.02 0 0 1-2-1.77L3.53 6.8zM18.32 8l.45-4H5.82l-2-2H21l-1.71 15.47L9.82 8z"></svg:path>`,
})
export class MdiCupOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
