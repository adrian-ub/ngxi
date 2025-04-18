import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLadderSimpleLightIcon],svg[ph-ladder-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 26a6 6 0 0 0-6 6v34H70V32a6 6 0 0 0-12 0v192a6 6 0 0 0 12 0v-34h116v34a6 6 0 0 0 12 0V32a6 6 0 0 0-6-6m-6 52v44H70V78ZM70 178v-44h116v44Z"></svg:path>`,
})
export class PhLadderSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
