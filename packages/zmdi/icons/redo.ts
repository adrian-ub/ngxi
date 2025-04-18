import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiRedoIcon],svg[zmdi-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m360 162l76-77v192H244l78-77q-48-40-110-40q-56 0-100.5 33T50 277L0 261q22-68 80.5-111T212 107q84 0 148 55"></svg:path>`,
})
export class ZmdiRedoIcon {
  readonly viewBox = input("0 0 440 384")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
