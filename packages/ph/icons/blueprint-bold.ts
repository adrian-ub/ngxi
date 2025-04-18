import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBlueprintBoldIcon],svg[ph-blueprint-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 48H76v-8a12 12 0 0 0-12-12H48a36 36 0 0 0-36 36v112a36 36 0 0 0 36 36h184a12 12 0 0 0 12-12V60a12 12 0 0 0-12-12M36 64a12 12 0 0 1 12-12h4v88h-4a35.6 35.6 0 0 0-12 2.06Zm184 124H48a12 12 0 0 1 0-24h16a12 12 0 0 0 12-12V72h144Zm-116-52a12 12 0 0 0 0 24h12v4a12 12 0 0 0 24 0v-4h16v4a12 12 0 0 0 24 0v-4h12a12 12 0 0 0 0-24h-12v-12h12a12 12 0 0 0 0-24h-12v-4a12 12 0 0 0-24 0v4h-16v-4a12 12 0 0 0-24 0v4h-12a12 12 0 0 0 0 24h12v12Zm36-12h16v12h-16Z"></svg:path>`,
})
export class PhBlueprintBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
