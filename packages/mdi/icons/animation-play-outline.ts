import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAnimationPlayOutlineIcon],svg[mdi-animation-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v10h2V4h10V2zm4 4a2 2 0 0 0-2 2v10h2V8h10V6zm12 6v8h-8v-8zm0-2h-8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m-6 3v6l4-3z"></svg:path>`,
})
export class MdiAnimationPlayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
