import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsParallelTasksIcon],svg[flat-color-icons-parallel-tasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#90CAF9" d="M36 13V9H22v13h-9v4h9v13h14v-4H26v-9h10v-4H26v-9z"></svg:path><svg:path fill="#D81B60" d="M6 17h10v14H6z"></svg:path><svg:path fill="#2196F3" d="M32 6h10v10H32zm0 26h10v10H32zm0-13h10v10H32z"></svg:path>`,
})
export class FlatColorIconsParallelTasksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
