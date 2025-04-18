import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSolarPanel05Icon],svg[hugeicons-solar-panel-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 8a3 3 0 1 1 6 0m.793 3H8.207c-.973 0-1.46 0-1.833.267c-.372.267-.543.738-.885 1.68l-.725 2c-.668 1.841-1.002 2.762-.57 3.407C4.627 19 5.578 19 7.481 19h9.038c1.903 0 2.854 0 3.287-.646c.432-.645.098-1.566-.57-3.407l-.725-2c-.342-.942-.513-1.413-.886-1.68C17.254 11 16.767 11 15.793 11M12 11v8m7-4H5m7 4v3m0 0h2m-2 0h-2m2-19.5V2m5.5 6h.5M6 8h.5m9.389-3.89l.353-.353m-8.484.001l.353.353" color="currentColor"></svg:path>`,
})
export class HugeiconsSolarPanel05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
