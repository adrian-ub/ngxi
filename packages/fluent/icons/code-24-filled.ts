import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCode24FilledIcon],svg[fluent-code-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.086 18.611l5.996-14.004a1 1 0 0 1 1.878.677l-.04.11l-5.996 14.004a1 1 0 0 1-1.878-.677zl5.996-14.004zm-5.793-7.318l4-4a1 1 0 0 1 1.497 1.32l-.083.094L4.414 12l3.293 3.293a1 1 0 0 1-1.32 1.498l-.094-.084l-4-4a1 1 0 0 1-.083-1.32zl4-4zm14-4.001a1 1 0 0 1 1.32-.083l.093.083l4.001 4.001a1 1 0 0 1 .083 1.32l-.083.095l-4.001 3.995a1 1 0 0 1-1.497-1.32l.084-.095L19.585 12l-3.293-3.294a1 1 0 0 1 0-1.414"></svg:path>`,
})
export class FluentCode24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
