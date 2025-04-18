import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightShuffleIcon],svg[mdi-light-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5h6v6h-1V6.71L4.71 20L4 19.29L17.29 6H13zm0 14h4.29l-4.58-4.59l.7-.7L18 18.29V14h1v6h-6zM4 5.71L4.71 5l5.58 5.59l-.7.7z"></svg:path>`,
})
export class MdiLightShuffleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
