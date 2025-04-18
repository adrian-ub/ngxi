import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayFotScreenIcon],svg[subway-fot-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M418.9 418.9V279.3l-46.5 46.5l-46.5-46.5l-46.5 46.5l46.5 46.5l-46.5 46.5h139.5zM0 0v512h512V0zm465.5 465.5h-419v-419h418.9v419zM186.2 232.7l46.5-46.5l-46.5-46.5l46.5-46.5H93.1v139.6l46.5-46.5z"></svg:path>`,
})
export class SubwayFotScreenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
