import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiCeilingAurelleCircleIcon],svg[cbi-ceiling-aurelle-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.4C5.6 6.4.5 8.6.5 11.4v1c0 2.8 5 5 11.5 5s11.5-2.2 11.5-5v-1c0-2.8-5-5-11.5-5m0 9.9c-6.3 0-10.5-2-10.5-4s4.2-4 10.5-4s10.5 2 10.5 4s-4.2 4-10.5 4m-8.1-3.8c0 1.8 4.1 2.7 8.1 2.7s8.1-.9 8.1-2.7C20.2 9 3.9 9 3.9 12.5"></svg:path>`,
})
export class CbiCeilingAurelleCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
