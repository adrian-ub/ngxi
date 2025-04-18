import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSprinklerIcon],svg[mdi-sprinkler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7h2v2h-2zM5 22h4V10H5zm9-11h2V9h-2zm3-1h2V8h-2zm0-5v2h2V5zm-3 3h2V6h-2zm3 5h2v-2h-2zM5 7h.33L6 9h2l.67-2H9V6H5z"></svg:path>`,
})
export class MdiSprinklerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
