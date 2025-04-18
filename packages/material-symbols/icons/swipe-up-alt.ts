import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSwipeUpAltIcon],svg[material-symbols-swipe-up-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20q-2.075 0-3.537-1.463T7 15q0-1.825 1.138-3.187T11 10.1V5.825L9.4 7.4L8 6l4-4l4 4l-1.4 1.425l-1.6-1.6V10.1q1.725.35 2.863 1.713T17 15q0 2.075-1.463 3.538T12 20"></svg:path>`,
})
export class MaterialSymbolsSwipeUpAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
