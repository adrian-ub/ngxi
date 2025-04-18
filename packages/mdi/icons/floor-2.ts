import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFloor2Icon],svg[mdi-floor-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 3L2 12h3v8h14v-8h3L12 3zM9 8h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4v2H9v-4a2 2 0 0 1 2-2h2v-2H9V8z" fill="currentColor"></svg:path>`,
})
export class MdiFloor2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
