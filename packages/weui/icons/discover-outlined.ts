import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiDiscoverOutlinedIcon],svg[weui-discover-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 20.8a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6m0 1.2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-.877-10.877l-1.856 3.61l3.61-1.856l1.856-3.61zm-.89-.89l5.891-3.03a.5.5 0 0 1 .674.673l-3.03 5.892l-5.892 3.03a.5.5 0 0 1-.674-.674l3.03-5.892z"></svg:path>`,
})
export class WeuiDiscoverOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
