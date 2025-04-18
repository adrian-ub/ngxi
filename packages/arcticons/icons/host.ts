import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHostIcon],svg[arcticons-host-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.613 35.142l29.53-29.529M12.337 9.512v8.6m5.698-8.6v8.6m-5.698-4.3h5.698"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.695 28.093l6.02 3.061l-1.789-4.84H24m-4.926-4.627H24m0 4.626h7.074l-1.79 4.841L43.35 24m-.001 0l-14.064-7.154l1.789 4.84H24"></svg:path>`,
})
export class ArcticonsHostIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
