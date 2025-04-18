import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDreamlabIcon],svg[arcticons-dreamlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.789 35.514a8.288 8.288 0 1 1 5.328-14.638m0 0a9.946 9.946 0 1 1 19.49 3.893m.006-.007a5.387 5.387 0 1 1 .5 10.752m-25.324 0h25.324"></svg:path>`,
})
export class ArcticonsDreamlabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
