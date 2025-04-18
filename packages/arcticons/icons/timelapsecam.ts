import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTimelapsecamIcon],svg[arcticons-timelapsecam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 11.98v27.26h-39V15.17l1.52-.49l6.34-2.05l2-.65zM17.723 8.718h12.553v3.261H17.723z"></svg:path><svg:circle cx="24" cy="25.702" r="8.638" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.36 9.76v2.87l-6.34 2.05V9.76z"></svg:path>`,
})
export class ArcticonsTimelapsecamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
