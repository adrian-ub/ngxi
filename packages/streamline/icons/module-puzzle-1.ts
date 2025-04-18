import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineModulePuzzle1Icon],svg[streamline-module-puzzle-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.1 1.211c.36.351.573.824.599 1.325L6.521.723a.67.67 0 0 1 .996 0l1.475 1.535q-.317.153-.568.398a2.052 2.052 0 0 0 2.899 2.9c.162-.167.297-.36.399-.569l1.554 1.535a.67.67 0 0 1 0 .996l-1.813 1.784a2.043 2.043 0 1 1-2.162 2.162l-1.824 1.813a.67.67 0 0 1-.996 0l-1.475-1.534c.21-.102.402-.237.568-.4a2.057 2.057 0 1 0-3.317-2.33L.723 7.478a.67.67 0 0 1 0-.996l1.813-1.784a2 2 0 0 1-1.325-.597a2.043 2.043 0 1 1 2.89-2.89v0Z"></svg:path>`,
})
export class StreamlineModulePuzzle1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
