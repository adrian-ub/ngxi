import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBuildRunIcon],svg[carbon-build-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 24l-6 6l-1.4-1.4l3.6-3.6H17v-2h9.2l-3.6-3.6L24 18zM21.485 7.126l-9-5a1 1 0 0 0-.97 0l-9 5A1 1 0 0 0 2 8v10a1 1 0 0 0 .514.874l9 5A1 1 0 0 0 13 23v-9.412L20 9.7V14h2V8a1 1 0 0 0-.515-.874M12 4.144L18.941 8L12 11.856L5.06 8zM4 17.411V9.7l7 3.89v7.71z"></svg:path>`,
})
export class CarbonBuildRunIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
