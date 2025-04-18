import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatAntennaBarsIcon],svg[fluent-emoji-flat-antenna-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00A6ED" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M23.87 27h2.25c.49 0 .88-.39.88-.87V5.88c0-.49-.39-.88-.87-.88h-2.25c-.49 0-.88.39-.88.88v20.24c0 .49.39.88.87.88m-3.75 0h-2.25c-.48 0-.87-.39-.87-.88V9.88c0-.49.39-.88.88-.88h2.25c.48 0 .87.39.87.88v16.25c0 .48-.39.87-.88.87m-8.24 0h2.24c.49 0 .88-.39.89-.87V14.88c0-.49-.4-.88-.88-.88h-2.25c-.49 0-.88.39-.88.88v11.24c0 .49.39.88.88.88m-6 0h2.24c.49 0 .88-.39.88-.87v-5.25c0-.49-.39-.88-.87-.88H5.88c-.49 0-.88.39-.88.87v5.25c0 .49.39.88.88.88"></svg:path></svg:g>`,
})
export class FluentEmojiFlatAntennaBarsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
