import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowsVIcon],svg[gg-arrows-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.757 5.04l1.415 1.415L11 4.627V10h2V4.627l1.828 1.828l1.415-1.414L12 .798zm8.486 13.92l-1.415-1.415L13 19.373V14h-2v5.374l-1.828-1.829l-1.415 1.414L12 23.202z"></svg:path>`,
})
export class GgArrowsVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
