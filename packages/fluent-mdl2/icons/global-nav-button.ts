import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GlobalNavButtonIcon],svg[fluent-mdl2-global-nav-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 640H0V512h2048zm0 1024H0v-128h2048zm0-513H0v-127h2048z"></svg:path>`,
})
export class FluentMdl2GlobalNavButtonIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
