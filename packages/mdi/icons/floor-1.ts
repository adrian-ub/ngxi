import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFloor1Icon],svg[mdi-floor-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 3L2 12h3v8h14v-8h3L12 3zm-2 5h4v10h-2v-8h-2V8z" fill="currentColor"></svg:path>`,
})
export class MdiFloor1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
