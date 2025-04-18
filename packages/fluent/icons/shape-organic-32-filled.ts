import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShapeOrganic32FilledIcon],svg[fluent-shape-organic-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.264 11.785c-.508-.419-1.222-1.39-1.222-3.707c0-1.516-.514-2.704-1.312-3.6c-.78-.876-1.788-1.428-2.728-1.78a11.5 11.5 0 0 0-2.558-.611A10 10 0 0 0 14.26 2c-3.185 0-5.602.873-7.41 2.241c-1.798 1.361-2.925 3.16-3.631 4.909c-.706 1.746-1.006 3.478-1.132 4.762c-.45 4.597.307 10.075 4.04 13.189C8.753 29.29 12.359 30 16.287 30c3.62 0 7.013-.783 9.534-2.475c2.563-1.72 4.177-4.358 4.178-7.866c0-3.207-1.356-5.107-2.795-6.177a7 7 0 0 0-1.917-1.005c-.667-.229-1.462-.232-2.023-.693"></svg:path>`,
})
export class FluentShapeOrganic32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
