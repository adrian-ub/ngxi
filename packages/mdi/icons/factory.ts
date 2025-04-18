import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFactoryIcon],svg[mdi-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18v2h4v-2zm0-4v2h10v-2zm6 4v2h4v-2zm6-4v2h4v-2zm0 4v2h4v-2zM2 22V8l5 4V8l5 4V8l5 4l1-10h3l1 10v10z"></svg:path>`,
})
export class MdiFactoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
