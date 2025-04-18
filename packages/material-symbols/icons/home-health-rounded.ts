import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeHealthRoundedIcon],svg[material-symbols-home-health-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 14.5v1q0 .625.438 1.063T12 17t1.063-.437t.437-1.063v-1h1q.625 0 1.063-.437T16 13t-.437-1.062T14.5 11.5h-1v-1q0-.625-.437-1.062T12 9t-1.062.438T10.5 10.5v1h-1q-.625 0-1.062.438T8 13t.438 1.063T9.5 14.5zM6 21q-.825 0-1.412-.587T4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21z"></svg:path>`,
})
export class MaterialSymbolsHomeHealthRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
