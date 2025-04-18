import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDoorSlidingOutlineIcon],svg[material-symbols-light-door-sliding-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.73 12.77q-.309 0-.539-.23t-.23-.54t.23-.54t.54-.23t.54.23t.229.54t-.23.54t-.54.23m4.54 0q-.31 0-.54-.23T13.5 12t.23-.54t.54-.23t.539.23t.23.54t-.23.54t-.54.23M4.5 20v-1h1V5.616q0-.691.463-1.153T7.116 4h9.769q.69 0 1.153.463t.462 1.153V19h1v1zm2-1h5V5H7.116q-.231 0-.424.192t-.192.424zm6 0h5V5.616q0-.231-.192-.424T16.884 5H12.5zm-.5-7.5"></svg:path>`,
})
export class MaterialSymbolsLightDoorSlidingOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
