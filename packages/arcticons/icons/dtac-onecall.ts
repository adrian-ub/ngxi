import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDtacOnecallIcon],svg[arcticons-dtac-onecall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.028 15.458l7.97-3.54v26.85h-12.97a3.656 3.656 0 0 1-3.664-3.648V9.164A3.656 3.656 0 0 1 11.012 5.5h25.96a3.656 3.656 0 0 1 3.664 3.648v25.956a3.656 3.656 0 0 1-3.648 3.664h-.555m-4.857 0h-7.579m7.578 0l2.903 2.83c.773.754 1.955 1.673 1.955-.204v-2.626"></svg:path>`,
})
export class ArcticonsDtacOnecallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
