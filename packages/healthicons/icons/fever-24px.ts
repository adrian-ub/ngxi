import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsFever24pxIcon],svg[healthicons-fever-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="1.5" d="M15.869 3.595q-.12.242-.215.452A8.753 8.753 0 0 0 3.66 9.344a4 4 0 0 0-.576.183C4.166 5.619 7.748 2.75 12 2.75c1.382 0 2.692.303 3.869.845Zm-.18 5.985ZM4.045 16.723a4 4 0 0 0 .604.024a8.75 8.75 0 0 0 16.05-5.694a4 4 0 0 0 .47-.284q.08.604.081 1.231a9.25 9.25 0 0 1-17.205 4.723Zm2.16-3.05l1.293.554a4 4 0 0 0-.205.456l-1.496-.64l-.346-.15l-.326.19a1.25 1.25 0 1 1 .625-1.093l.004.49zm9.324 2.777H12.69a1.75 1.75 0 0 0-1.002-2.058l-1.718-.737c.741-.535 1.557-.705 2.029-.705c.568 0 1.636.246 2.47 1.08c.45.452.698.812.848 1.236c.11.307.179.678.21 1.184Zm-6.644-1.629l2.214.95a.25.25 0 0 1-.197.459l-2.228-.955l.007-.021q.08-.223.204-.433ZM19 8.25c-.35 0-.63-.116-.882-.368A1.18 1.18 0 0 1 17.75 7c0-.31.086-.675.298-1.107c.161-.327.474-.844.952-1.561c.478.717.791 1.234.952 1.561c.212.432.298.798.298 1.107c0 .35-.116.63-.368.882A1.18 1.18 0 0 1 19 8.25Z"></svg:path>`,
})
export class HealthiconsFever24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
