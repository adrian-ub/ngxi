import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiYogaIcon],svg[mdi-yoga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2a2 2 0 1 0 0 4c1.11 0 2-.89 2-2a2 2 0 0 0-2-2M4 7v2h6v6l-5.07 5.07l1.41 1.43l6.72-6.73L17 17.13V21h2v-4.43c0-.36-.18-.68-.5-.86L15 13.6V9h6V7z"></svg:path>`,
})
export class MdiYogaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
