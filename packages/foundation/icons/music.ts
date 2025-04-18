import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationMusicIcon],svg[foundation-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84.105 13.627H32.938a3.196 3.196 0 0 0-3.195 3.195v48.069a16.5 16.5 0 0 0-3.543-.394c-7.456 0-13.5 4.896-13.5 10.938c0 6.041 6.044 10.937 13.5 10.937c7.455 0 13.5-4.896 13.5-10.937V29.257h37.644v26.401a16.5 16.5 0 0 0-3.543-.394c-7.456 0-13.5 4.896-13.5 10.938s6.044 10.937 13.5 10.937c7.455 0 13.5-4.896 13.5-10.937V16.823a3.197 3.197 0 0 0-3.196-3.196"></svg:path>`,
})
export class FoundationMusicIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
