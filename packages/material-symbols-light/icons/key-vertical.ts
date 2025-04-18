import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyVerticalIcon],svg[material-symbols-light-key-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.02 8.846q.769 0 1.307-.538T13.866 7t-.539-1.308t-1.308-.538t-1.307.538T10.173 7t.539 1.308t1.307.538m.012 13.231l-2.646-2.596l1.384-1.712l-1.442-1.827l1.192-1.558v-2.85q-1.338-.509-2.284-1.684T7.289 7q0-2 1.365-3.365t3.365-1.366t3.366 1.366T16.75 7q0 1.698-.958 2.865q-.958 1.166-2.273 1.67v9.042z"></svg:path>`,
})
export class MaterialSymbolsLightKeyVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
