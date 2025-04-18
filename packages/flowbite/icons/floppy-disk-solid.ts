import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteFloppyDiskSolidIcon],svg[flowbite-floppy-disk-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.414A2 2 0 0 0 20.414 6L18 3.586A2 2 0 0 0 16.586 3zm10 11a3 3 0 1 1-6 0a3 3 0 0 1 6 0M8 7V5h8v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteFloppyDiskSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
