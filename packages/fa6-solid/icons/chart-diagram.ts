import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidChartDiagramIcon],svg[fa6-solid-chart-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 32c-26.5 0-48 21.5-48 48s21.5 48 48 48h152v40l-48 48h-56c-48.6 0-88 39.4-88 88v48h-8c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-8v-48c0-22.1 17.9-40 40-40h56l48 48v40h-8c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-8v-40l48-48h56c22.1 0 40 17.9 40 40v48h-8c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-8v-48c0-48.6-39.4-88-88-88h-56l-48-48v-40h152c26.5 0 48-21.5 48-48s-21.5-48-48-48z"></svg:path>`,
})
export class Fa6SolidChartDiagramIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
