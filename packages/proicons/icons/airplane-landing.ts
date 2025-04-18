import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAirplaneLandingIcon],svg[proicons-airplane-landing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 20.75h18.5m-2.05-7.453a1.783 1.783 0 1 1-.923 3.445L8.185 14.04a4 4 0 0 1-1.32-.628l-2.14-1.543A3.04 3.04 0 0 1 3.47 9.271l.11-2.508a.607.607 0 0 1 .765-.56l.436.117a1.52 1.52 0 0 1 1.086 1.121l.486 2.082c.051.218.218.39.434.448l4.015 1.076l.506-6.735a.607.607 0 0 1 .763-.541l.422.113c.363.097.643.388.725.755l1.692 7.509z"></svg:path>`,
})
export class ProiconsAirplaneLandingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
