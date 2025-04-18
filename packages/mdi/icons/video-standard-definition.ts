import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVideoStandardDefinitionIcon],svg[mdi-video-standard-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14v-4c0-.3-.2-.5-.5-.5h-1v5h1c.3 0 .5-.2.5-.5m3-7v3.5l4-4v11l-4-4V17c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h12c.6 0 1 .4 1 1m-3 9c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5h-3v8zM9 8H5.5C4.67 8 4 8.67 4 9.5V11c0 .83.67 1.5 1.5 1.5h2v2H4V16h3.5c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-2V9.5H9z"></svg:path>`,
})
export class MdiVideoStandardDefinitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
