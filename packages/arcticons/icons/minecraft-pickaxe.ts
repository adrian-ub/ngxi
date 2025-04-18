import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMinecraftPickaxeIcon],svg[arcticons-minecraft-pickaxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.346 36.808v-2.846h2.846v-2.847h2.847v-2.846h2.846v-2.846h2.846v-2.846h2.846v-2.846h2.846v-2.846h2.846v-2.846H16.885v-2.847h-2.846V8.346h2.846V5.5h14.23v2.846h8.539v8.539H42.5v14.23h-2.846v2.847h-2.846v-2.847h-2.846V19.731h-2.847v2.846h-2.846v2.846h-2.846v2.846h-2.846v2.846h-2.846v2.847h-2.846v2.846h-2.846v2.846h-2.847V42.5H5.5v-5.692z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.962 8.346v5.693h5.692m-5.692 5.692v-2.846h-2.847v-2.846h-2.846"></svg:path>`,
})
export class ArcticonsMinecraftPickaxeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
