import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFloorAIcon],svg[mdi-floor-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 3L2 12h3v8h14v-8h3L12 3zm-1 5h2a2 2 0 0 1 2 2v8h-2v-3h-2v3H9v-8a2 2 0 0 1 2-2zm0 2v3h2v-3h-2z" fill="currentColor"></svg:path>`,
})
export class MdiFloorAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
