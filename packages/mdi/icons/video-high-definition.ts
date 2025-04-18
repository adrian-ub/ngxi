import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVideoHighDefinitionIcon],svg[mdi-video-high-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10v4c0 .3-.2.5-.5.5h-1v-5h1c.3 0 .5.2.5.5m3 .5V7c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-3.5l4 4v-11zM9.5 16H8v-3.2H6V16H4.5V8H6v3.2h2V8h1.5zm6-1.5c0 .8-.7 1.5-1.5 1.5h-3V8h3c.8 0 1.5.7 1.5 1.5z"></svg:path>`,
})
export class MdiVideoHighDefinitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
