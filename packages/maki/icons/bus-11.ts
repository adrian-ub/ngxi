import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiBus11Icon],svg[maki-bus-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3 0C2 0 1 .531 1 2v7.5s0 .5.5.5l.5.016v.484s0 .5.5.5H3s.5 0 .5-.5v-.484l4-.016v.5s0 .5.5.5h.5c.5 0 .5-.5.5-.5v-.484L9.5 10s.5 0 .5-.5V2c0-1.5-1-2-2-2H3zm.75 1h3.5a.25.25 0 1 1 0 .5h-3.5a.25.25 0 1 1 0-.5zM3 2h5c1 0 1 1 1 1v2s0 1-1 1H3C2 6 2 5 2 5V3s0-1 1-1zm-.25 5.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5zm5.5 0a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5z" fill="currentColor"></svg:path>`,
})
export class MakiBus11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
