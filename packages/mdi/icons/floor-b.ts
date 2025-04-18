import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFloorBIcon],svg[mdi-floor-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 3L2 12h3v8h14v-8h3L12 3zM9 8h4a2 2 0 0 1 2 2v1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1 1.5 1.5V16a2 2 0 0 1-2 2H9V8zm2 2v2h2v-2h-2zm0 4v2h2v-2h-2z" fill="currentColor"></svg:path>`,
})
export class MdiFloorBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
