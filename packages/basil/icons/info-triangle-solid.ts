import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilInfoTriangleSolidIcon],svg[basil-info-triangle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.73 3.993a2.75 2.75 0 0 1 4.54 0l.432.632a76 76 0 0 1 6.944 12.563l.09.208a2.51 2.51 0 0 1-2.024 3.497a69.4 69.4 0 0 1-15.424 0a2.51 2.51 0 0 1-2.024-3.497l.09-.208A76 76 0 0 1 9.298 4.625zM13 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-1 2.75a.75.75 0 0 1 .75.75v5a.75.75 0 1 1-1.5 0v-5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class BasilInfoTriangleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
