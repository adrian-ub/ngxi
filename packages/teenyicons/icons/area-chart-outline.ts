import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAreaChartOutlineIcon],svg[teenyicons-area-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.5 14.5H0v.5h.5zm6-9l.4-.3a.5.5 0 0 0-.816.023zm3 4l-.4.3a.5.5 0 0 0 .807-.01zM0 0v14.5h1V0zm.5 15H15v-1H.5zm2.416-3.223l4-6l-.832-.554l-4 6zM6.1 5.8l3 4l.8-.6l-3-4zm3.807 3.99l5-7l-.814-.58l-5 7z"></svg:path>`,
})
export class TeenyiconsAreaChartOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
