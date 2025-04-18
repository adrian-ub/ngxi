import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFilmSlateSolidIcon],svg[streamline-film-slate-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m1.176 6.08l2.294-.614l.01-.045l.768-3.315l1.368-.367l-.003.014L4.837 5.1l2.873-.77l.003-.012L8.51.964L9.882.597l-.003.01l-.797 3.355L12.97 2.92L12.441.946A1 1 0 0 0 11.216.24L1.354 2.882a1 1 0 0 0-.707 1.224l.529 1.975Zm.001 0h12.21v6.715a1 1 0 0 1-1 1H2.178a1 1 0 0 1-1-1V6.081Zm2.174 5.004c0-.345.28-.625.625-.625h1.365a.625.625 0 0 1 0 1.25H3.976a.625.625 0 0 1-.625-.625" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFilmSlateSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
