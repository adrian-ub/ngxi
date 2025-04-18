import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSlackSolidIcon],svg[teenyicons-slack-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.385 6.923H8.077v-5.77a1.154 1.154 0 0 1 2.308 0zm2.307 0H11.54V5.77a1.154 1.154 0 1 1 1.153 1.154m1.153 1.153h-5.77v2.308h5.77a1.154 1.154 0 0 0 0-2.308m-5.769 4.615V11.54H9.23a1.154 1.154 0 1 1-1.154 1.153M1.154 4.615h5.77v2.308h-5.77a1.154 1.154 0 0 1 0-2.308m5.769-2.307v1.154H5.77a1.154 1.154 0 1 1 1.154-1.154M1.154 9.23c0-.636.516-1.153 1.154-1.153h1.154V9.23a1.154 1.154 0 0 1-2.308 0m3.461 4.616v-5.77h2.308v5.77a1.154 1.154 0 0 1-2.308 0"></svg:path>`,
})
export class TeenyiconsSlackSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
