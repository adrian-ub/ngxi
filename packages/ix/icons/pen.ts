import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPenIcon],svg[ix-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 426.667v42.667H42.667v-42.667zM320 42.667l106.667 106.667L192 384H85.334V277.334zM249.747 173.25L128 294.998v46.336h46.336l121.747-121.748zM320 102.998l-40.083 40.082l46.336 46.336l40.083-40.082z"></svg:path>`,
})
export class IxPenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
