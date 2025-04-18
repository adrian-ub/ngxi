import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSlideshowIcon],svg[zmdi-slideshow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m149 107l107 85l-107 85zM341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm0 341V43H43v298z"></svg:path>`,
})
export class ZmdiSlideshowIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
