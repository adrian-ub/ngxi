import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFluent32FilledIcon],svg[fluent-fluent-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.447 2.106a1 1 0 0 0-.894 0l-8 4A1 1 0 0 0 8 7v17.5a1 1 0 0 0 .51.872l8 4.5A1 1 0 0 0 18 29v-9.382l7.447-3.724a1 1 0 0 0 0-1.788L19.237 11l6.21-3.106a1 1 0 0 0 0-1.788z"></svg:path>`,
})
export class FluentFluent32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
