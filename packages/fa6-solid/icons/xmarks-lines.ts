import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidXmarksLinesIcon],svg[fa6-solid-xmarks-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h576c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 384c-17.7 0-32 14.3-32 32s14.3 32 32 32h576c17.7 0 32-14.3 32-32s-14.3-32-32-32zM7 167c-9.4 9.4-9.4 24.6 0 33.9l55 55L7 311c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55l55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55l55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55L41 167c-9.4-9.4-24.6-9.4-33.9 0zm258 0c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l55 55l-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55l55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55l55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55zm190 0c-9.4 9.4-9.4 24.6 0 33.9l55 55l-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55l55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55l55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55l-55-55c-9.4-9.4-24.6-9.4-33.9 0"></svg:path>`,
})
export class Fa6SolidXmarksLinesIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
