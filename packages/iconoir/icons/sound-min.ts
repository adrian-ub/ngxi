import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirSoundMinIcon],svg[iconoir-sound-min-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.5 13.857v-3.714a2 2 0 0 1 2-2h2.9a1 1 0 0 0 .55-.165l6-3.956a1 1 0 0 1 1.55.835v14.286a1 1 0 0 1-1.55.835l-6-3.956a1 1 0 0 0-.55-.165H5.5a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke-linecap="round" d="M20.5 15V9"></svg:path></svg:g>`,
})
export class IconoirSoundMinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
