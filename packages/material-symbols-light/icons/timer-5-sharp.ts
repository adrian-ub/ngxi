import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTimer5SharpIcon],svg[material-symbols-light-timer-5-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.692 16.635h4.616V12.5h-3.616v-2.134h3.616v-1H9.692V13.5h3.616v2.135H9.692zM9.385 2.5v-1h5.23v1zM12 21q-1.649 0-3.108-.626t-2.55-1.716t-1.716-2.55T4 13t.626-3.108t1.716-2.55t2.55-1.716T12 5q1.454 0 2.812.52t2.492 1.469l1.092-1.093l.708.708l-1.092 1.092q.95 1.135 1.469 2.493T20 13q0 1.649-.626 3.108t-1.716 2.55t-2.55 1.716T12 21"></svg:path>`,
})
export class MaterialSymbolsLightTimer5SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
