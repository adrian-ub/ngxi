import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhDaggerIcon],svg[whh-dagger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1014.957 963l-51 51q-10 10-24.5 10t-25.5-10l-328-329l-77 78q-6 5-14 5t-13-5l-28-27q-5-6-5-14t5-14l29-29l-226-199q-75-75-161-229.5T.957 0q11 13 27 29t37.5 36.5t31.5 30.5q73 73 154 123.5t99 32.5l.5-.5l.5-1.5l281 281l13-14q6-5 14-5t14 5l27 28q6 5 6 13t-6 14l-13 13l328 328q10 11 10 25.5t-10 24.5"></svg:path>`,
})
export class WhhDaggerIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
