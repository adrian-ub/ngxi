import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGhostLightIcon],svg[ph-ghost-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M110 116a10 10 0 1 1-10-10a10 10 0 0 1 10 10m46-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m66 14v96a6 6 0 0 1-9.8 4.64l-25.53-20.89l-25.54 20.89a6 6 0 0 1-7.6 0L128 199.75l-25.53 20.89a6 6 0 0 1-7.6 0l-25.54-20.89l-25.53 20.89A6 6 0 0 1 34 216v-96a94 94 0 0 1 188 0m-12 0a82 82 0 0 0-164 0v83.34l19.53-16a6 6 0 0 1 7.6 0l25.54 20.89l25.53-20.89a6 6 0 0 1 7.6 0l25.53 20.89l25.54-20.89a6 6 0 0 1 7.6 0l19.53 16Z"></svg:path>`,
})
export class PhGhostLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
