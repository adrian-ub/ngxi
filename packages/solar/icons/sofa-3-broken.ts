import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSofa3BrokenIcon],svg[solar-sofa-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M11 18h9a2 2 0 1 0 0-4H4a2 2 0 1 0 0 4h3m-2.5-4l-.075-.299c-1.087-4.347-1.63-6.52-.56-8.023q.102-.142.216-.275C5.278 4 7.519 4 12 4q1.083-.002 2 .006M19.5 14l.075-.299c1.086-4.347 1.63-6.52.559-8.023a4 4 0 0 0-.215-.275c-.462-.54-1.078-.873-1.919-1.078M20 20v-2M4 20v-2"></svg:path>`,
})
export class SolarSofa3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
