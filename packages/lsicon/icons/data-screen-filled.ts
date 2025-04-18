import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconDataScreenFilledIcon],svg[lsicon-data-screen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 4H2V3h12zM1 4.948l.55.054C3.228 5.17 6.83 5.5 8 5.5s4.772-.33 6.45-.498l.55-.054v6.105l-.55-.056C12.772 10.83 9.17 10.5 8 10.5s-4.772.33-6.45.498l-.55.055zM14 12v1H2v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconDataScreenFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
