import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisLayersAltIcon],svg[uis-layers-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7H6c-.6 0-1 .4-1 1v2.5h7.5c.6 0 1 .4 1 1V19H16c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1m-5 5H3c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1M21 2H9c-.6 0-1 .4-1 1v2.5h9.5c.6 0 1 .4 1 1V16H21c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisLayersAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
