import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerLaptopDeviceLaptopElectronicsComputerNotebookIcon],svg[streamline-computer-laptop-device-laptop-electronics-computer-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 8L.72 10.55a1 1 0 0 0 .05 1a1 1 0 0 0 .85.47h10.76a1 1 0 0 0 .85-.47a1 1 0 0 0 0-1L11.5 8m-8-6a1 1 0 0 0-1 1v5h9V3a1 1 0 0 0-1-1Z"></svg:path>`,
})
export class StreamlineComputerLaptopDeviceLaptopElectronicsComputerNotebookIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
