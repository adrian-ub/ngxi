import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSwitch2Icon],svg[tabler-switch-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 17h5l1.67-2.386m3.66-5.227L15 7h6"></svg:path><svg:path d="m18 4l3 3l-3 3M3 7h5l7 10h6"></svg:path><svg:path d="m18 20l3-3l-3-3"></svg:path></svg:g>`,
})
export class TablerSwitch2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
