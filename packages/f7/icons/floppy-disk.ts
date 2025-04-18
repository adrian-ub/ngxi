import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7FloppyDiskIcon],svg[f7-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.04 6v10.56a2.64 2.64 0 0 0 2.64 2.64H36.8a2.64 2.64 0 0 0 2.64-2.64V6h.302c.934 0 1.829.37 2.489 1.031l6.738 6.738A3.52 3.52 0 0 1 50 16.258V46.48A3.52 3.52 0 0 1 46.48 50H9.52A3.52 3.52 0 0 1 6 46.48V9.52A3.52 3.52 0 0 1 9.52 6zm2.64 22.88a2.64 2.64 0 0 0-2.64 2.64v10.56a2.64 2.64 0 0 0 2.64 2.64H36.8a2.64 2.64 0 0 0 2.64-2.64V31.52a2.64 2.64 0 0 0-2.64-2.64zM32.4 6h1.76a.88.88 0 0 1 .88.88v7.04a.88.88 0 0 1-.88.88H32.4a.88.88 0 0 1-.88-.88V6.88A.88.88 0 0 1 32.4 6"></svg:path>`,
})
export class F7FloppyDiskIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
