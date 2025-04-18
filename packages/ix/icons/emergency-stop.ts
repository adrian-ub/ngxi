import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixEmergencyStopIcon],svg[ix-emergency-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M298.667 213.333V256H448v192H64V256h149.333v-42.667zm106.666 85.334H106.667v106.666h298.666zM256 64c79.529 0 151.726 58.258 170.667 128H85.333C104.274 122.258 176.471 64 256 64m0 40.421c-37.383 0-72.377 20.088-96 44.912h192c-22.498-23.642-55.387-43.432-90.682-44.808z" clip-rule="evenodd"></svg:path>`,
})
export class IxEmergencyStopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
