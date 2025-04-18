import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStairsIcon],svg[mdi-stairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 5v4h-4v4H7v4H3v3h7v-4h4v-4h4V8h4V5z"></svg:path>`,
})
export class MdiStairsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
