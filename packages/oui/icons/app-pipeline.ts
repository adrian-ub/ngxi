import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppPipelineIcon],svg[oui-app-pipeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M29 12a3 3 0 0 0-3 3h-4a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3H6a3 3 0 0 0-3-3H0v14h3a3 3 0 0 0 3-3h4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3h4a3 3 0 0 0 3 3h3V12zM3 24H2V14h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1m17-3v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2H6v-4h6v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h6v4zm10 3h-1a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h1z"></svg:path><svg:path d="M22 6H10v2h5v2h2V8h5z" class="ouiIcon__fillSecondary"></svg:path></svg:g>`,
})
export class OuiAppPipelineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
