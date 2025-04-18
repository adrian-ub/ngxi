import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBuildingSolidIcon],svg[teenyicons-building-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.724.053a.5.5 0 0 0-.448 0l-6 3l.448.894L7.5 1.06l5.776 2.888l.448-.894zM14 6h1V5H0v1h1v8H0v1h4V8h5v7h6v-1h-1z"></svg:path><svg:path fill="currentColor" d="M8 15V9H5v6z"></svg:path>`,
})
export class TeenyiconsBuildingSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
