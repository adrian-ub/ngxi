import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilFullscreenExitIcon],svg[cil-fullscreen-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 181.372L38.628 16H16v22.628L181.372 204H44v32h192V44h-32zM326.628 304H464v-32H272v192h32V326.628L473.372 496H496v-22.628z"></svg:path>`,
})
export class CilFullscreenExitIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
