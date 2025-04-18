import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixGanttchartIcon],svg[ix-ganttchart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 341.332v106.667h-192V341.332zm-384 0v106.667H42.667V341.332zm341.334 42.667H320v21.333h106.667zM384 213.332v106.667H128V213.332zm-42.667 42.667H170.667v21.333h170.666zm-128-170.667v106.667H42.667V85.332zm213.334 0v106.667H384V85.332zm-256 42.667H85.333v21.333h85.334z" clip-rule="evenodd"></svg:path>`,
})
export class IxGanttchartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
