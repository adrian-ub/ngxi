import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMoonsetIcon],svg[hugeicons-moonset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 6.5c.491.506 1.8 2.5 2.5 2.5M22 6.5c-.491.506-1.8 2.5-2.5 2.5m0 0V3m-2.75 15A8.3 8.3 0 0 0 18 15.322c-2.3.303-4.653-.844-5.884-3.108a6.63 6.63 0 0 1 .406-6.964a7.23 7.23 0 0 0-5.699.838c-3.656 2.24-4.908 7.203-2.798 11.084q.237.435.516.828M2 21h20" color="currentColor"></svg:path>`,
})
export class HugeiconsMoonsetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
