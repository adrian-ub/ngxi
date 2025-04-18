import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHomeFloorNegative1Icon],svg[mdi-home-floor-negative-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zm-1 12H7v-2h4zm4 3h-2v-8h-2V8h4z"></svg:path>`,
})
export class MdiHomeFloorNegative1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
