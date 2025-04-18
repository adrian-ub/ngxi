import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArmchair2Icon],svg[tabler-armchair-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 10V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4"></svg:path><svg:path d="M16 15v-2a3 3 0 1 1 3 3v3H5v-3a3 3 0 1 1 3-3v2m0-3h8m-9 7v2m10-2v2"></svg:path></svg:g>`,
})
export class TablerArmchair2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
